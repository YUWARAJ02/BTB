package com.BusTicket.Booking.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BusTicket.Booking.Entity.User;
import com.BusTicket.Booking.Service.UserService;

@RestController
@RequestMapping("/test")
public class UserController {
    
    @Autowired
    UserService userservice;
    
    @GetMapping
    public ResponseEntity<?> find() {
        return userservice.find() ;
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody User user) {
        return userservice.add(user);
    }
}
