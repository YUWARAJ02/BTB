package com.BusTicket.Booking.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.BusTicket.Booking.Entity.User;
import com.BusTicket.Booking.Repository.UserRepository;

@Service
public class UserService {
    
    @Autowired UserRepository userRepository;
    
    public ResponseEntity<?> find() {       
        return new ResponseEntity<>(userRepository.findAll(),HttpStatus.OK);
    }

    public ResponseEntity<?> add(User user) {
        return new ResponseEntity<>(userRepository.save(user),HttpStatus.OK);
    }
    
}
