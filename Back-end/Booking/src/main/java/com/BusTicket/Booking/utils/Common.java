package com.BusTicket.Booking.utils;

import java.util.Random;


public class Common {
	
	public static String generateOTP(int length) {
        Random random = new Random();
        StringBuilder otp = new StringBuilder();
        for (int i = 0; i < length; i++) {
            otp.append(random.nextInt(10)); // Generate a random digit between 0 and 9
        }
        return otp.toString();
    }
}
