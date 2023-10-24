package com.BusTicket.Booking.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BusTicket.Booking.Entity.User;
import com.BusTicket.Booking.Service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userservice;

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

}
