package com.BusTicket.Booking.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.BusTicket.Booking.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u.uid FROM User u WHERE u.username = :username AND u.password = :password")
    Long findUserIdByUsernameAndPassword(
            @Param("username") String username,
            @Param("password") String password);

    List<User> findByUsernameAndPassword(String username, String password);

    long countByUsername(String username);

    boolean existsByUsername(String username);
}
