package com.BusTicket.Booking.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BusTicket.Booking.Entity.User;
import com.BusTicket.Booking.Service.EmailService;
import com.BusTicket.Booking.Service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@Autowired
	private EmailService emailService;

	// @GetMapping
	// public ResponseEntity<?> find() {
	// 	return userservice.find();
	// }

	@PostMapping("/register")
	public ResponseEntity<?> save(@RequestBody User user) {
		return userservice.add(user);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody String json) {
		try {
			System.out.println(json);
			return userservice.login(json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/JWT_token")
	public ResponseEntity<?> homepage(@RequestBody JsonNode token) {
		try {
			return userservice.HomePage(token);
		} catch (JsonMappingException e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		}

	}
	
	@GetMapping("/otp")
	public ResponseEntity<?> otpCall(@RequestBody String emailId) {
	
		return userservice.SendOtp(emailId);
		
	}
	
	@PostMapping("/verifyotp")
	public ResponseEntity<?> VerifyOtp(@RequestBody JsonNode otpvalue) {
		if(otpvalue.has("emailId") && otpvalue.has("otp")) 
			return userservice.VerifyOtp(otpvalue.get("emailId").asText(), otpvalue.get("otp").asText());
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
