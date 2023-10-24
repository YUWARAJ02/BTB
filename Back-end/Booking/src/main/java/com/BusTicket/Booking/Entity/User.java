package com.BusTicket.Booking.Entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;
   
    @Column(unique = true)
    private String username;
    private String password;

    @Email @NotBlank 
    private String emailid;
    private Long phoneno;
    private String dob;

}
