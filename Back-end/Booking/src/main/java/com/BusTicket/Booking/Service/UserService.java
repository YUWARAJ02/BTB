package com.BusTicket.Booking.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.BusTicket.Booking.Config.JwtUtil;
import com.BusTicket.Booking.Entity.User;
import com.BusTicket.Booking.Repository.UserRepository;
import com.BusTicket.Booking.utils.Common;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UserService {

	private static final Logger logger = LoggerFactory.getLogger(UserService.class);
	@Autowired
	UserRepository userRepository;

	@Autowired
	private EmailService emailService;

	ObjectMapper mapper = new ObjectMapper();

	public ResponseEntity<?> find() {
		return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
	}

	public ResponseEntity<?> add(User user) {

		return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
	}

	public ResponseEntity<String> login(String json_v) throws JsonProcessingException {
		JsonNode json = mapper.readTree(json_v);
		if (json == null || !json.hasNonNull("email") || !json.hasNonNull("password"))
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

		logger.info("--------------------------------------------------------------");
		logger.info(json.get("email").asText() + "  " + json.get("password").asText());

		Long userId = userRepository.findUserIdByEmailIdAndPassword(json.get("email").asText(),
				json.get("password").asText());
		if (userId != null) {
			Map<String, String> res = new HashMap<>();
			res.put("status", "ok");
			res.put("auth_token", JwtUtil.generateToken(userId));
			return new ResponseEntity<>(mapper.writeValueAsString(res), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> HomePage(JsonNode json) throws JsonMappingException, JsonProcessingException {
		if (json == null)
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		JsonNode res = mapper.readTree(JwtUtil.parseToken(json.get("auth_token").asText()));
		return new ResponseEntity<Long>(res.get("id").asLong(), HttpStatus.OK);
	}

	// send otp mail and save in db
	public ResponseEntity<?> SendOtp(String emailId) {

		try {

			String otp = Common.generateOTP(4);
			User user = userRepository.findByemailid(emailId);

			emailService.sendHtmlEmail(emailId, "OTP Verification", emailService.otpContent(emailId,otp));
			user.setOtp(otp + "," + getNextDayDate(new Date()));
			userRepository.save(user);
			return new ResponseEntity<String>("mail sent", HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	// check otp is valid or not
	public ResponseEntity<?> VerifyOtp(String emailId, String otp) {

		User user = userRepository.findByemailid(emailId);

		String otpValue[] = user.getOtp().split(",");
		if (otpValue[0].equalsIgnoreCase(otp)) {
			SimpleDateFormat dateFormat = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy", Locale.US);

			try {
				Date storedDate = dateFormat.parse(otpValue[1]);

				if (new Date().before(storedDate))
					return new ResponseEntity<String>("success", HttpStatus.OK);
				else
					return new ResponseEntity<String>("otpExpired", HttpStatus.NOT_ACCEPTABLE);
			} catch (ParseException e) {
				// Handle parsing exception
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("wrongOtp", HttpStatus.NOT_ACCEPTABLE);

	}
	
	public Date getNextDayDate(Date currentDate) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentDate);
        calendar.add(Calendar.DAY_OF_MONTH, 1); // Add one day to the current date
        return calendar.getTime();
    }
}
