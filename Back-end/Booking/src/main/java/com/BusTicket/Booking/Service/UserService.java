package com.BusTicket.Booking.Service;

import java.util.HashMap;
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
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UserService {

	private static final Logger logger = LoggerFactory.getLogger(UserService.class);
	@Autowired
	UserRepository userRepository;

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
		if(userId!=null) {
		Map<String, String> res = new HashMap<>();
		res.put("status", "ok");
		res.put("auth_token", JwtUtil.generateToken(userId));
		return new ResponseEntity<>(mapper.writeValueAsString(res), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> HomePage(JsonNode json) throws JsonMappingException, JsonProcessingException {
		if(json==null)
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		JsonNode res = mapper.readTree(JwtUtil.parseToken(json.get("auth_token").asText()));
		return new ResponseEntity<Long>(res.get("id").asLong(),HttpStatus.OK);
	}

}
