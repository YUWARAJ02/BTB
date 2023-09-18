package com.BusTicket.Booking.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BusTicket.Booking.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

    List<?> findByusername(String string);

    long countByUsername(String username);

    boolean existsByUsername(String username);


    
    
}
