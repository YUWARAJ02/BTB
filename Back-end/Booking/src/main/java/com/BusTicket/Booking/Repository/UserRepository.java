package com.BusTicket.Booking.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.BusTicket.Booking.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u.uid FROM User u WHERE u.emailid = :emailid AND u.password = :password")
    Long findUserIdByEmailIdAndPassword(
            @Param("emailid") String emailid,
            @Param("password") String password);

    List<User> findByUsernameAndPassword(String username, String password);

    User findByemailid(String emailid);
}
