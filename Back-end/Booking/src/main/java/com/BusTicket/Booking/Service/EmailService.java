package com.BusTicket.Booking.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
	
	private final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        javaMailSender.send(message);
    }
    
    public void sendHtmlEmail(String to[], String subject, String htmlContent) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        // Use the true flag to indicate you are sending an HTML email
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlContent, true); // Set the second parameter to true to send HTML content

        javaMailSender.send(message);
    }
    
    public String otpContent(String mailId) {
    	
    	StringBuilder sb = new StringBuilder("");
    	
    	sb.append("<!DOCTYPE html>"
    			+ "<body>"
    			+ "    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"padding-bottom:20px;max-width:516px;min-width:220px;\">"
    			+ "    <tbody>"
    			+ "        <tr>"
    			+ "            <td width=\"8\" style=\"width:8px\"></td>"
    			+ "            <td>"
    			+ "                <div style=\"border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:40px 20px\""
    			+ "                    align=\"center\" class=\"m_6512990496430930532mdv2rw\">"
    			+ "                    <div className=\"iconcontainer\">"
    			+ "                        <!-- <img className=\"icon1\" alt=\"\" src=\"/20230930134049922-1@2x.png\" /> -->"
    			+ "                        <!-- <div className=\"logo2\"> -->"
    			+ "                            <i className=\"book1\" style=\"color: green; font-weight: bolder;\">BOOK </i>"
    			+ "                            <i className=\"my-vacations1\" style=\"color: blue;\">MY VACATIONS</i>"
    			+ "                        <!-- </div> -->"
    			+ "                    </div>"
    			+ "                    <div"
    			+ "                        style=\"font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;border-bottom:thin solid #dadce0;color:rgba(0,0,0,0.87);line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word\">"
    			+ "                        <div style=\"font-size:24px\">Verify your recovery email </div>"
    			+ "                    </div>"
    			+ "                    <div"
    			+ "                        style=\"font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;color:rgba(0,0,0,0.87);line-height:20px;padding-top:20px;text-align:left\">"
    			+ "                        BOOK MY VACATIONS received a request to change password for <a style=\"font-weight:bold\">"+mailId+"</a>"
    			+ "                        <br><br>Use this code to change password"
    			+ "                        setting :<br>"
    			+ "                        <div style=\"text-align:center;font-size:36px;margin-top:20px;line-height:44px\">313572"
    			+ "                        </div><br>This code will expire in 24 hours.<br><br>If you don’t recognize <a"
    			+ "                            style=\"font-weight:bold\">"+mailId+"</a>, you can safely ignore this"
    			+ "                        email."
    			+ "                    </div>"
    			+ "                </div>"
    			+ "                <div style=\"text-align:left\">"
    			+ "                    <div"
    			+ "                        style=\"font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:11px;line-height:18px;padding-top:12px;text-align:center\">"
    			+ "                        <div>You received this email to let you know about important changes to your Google"
    			+ "                            Account and services.</div>"
    			+ "                        <div style=\"direction:ltr\">© 2023 Google LLC, <a class=\"m_6512990496430930532afal\""
    			+ "                                style=\"font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:11px;line-height:18px;padding-top:12px;text-align:center\">1600"
    			+ "                                Amphitheatre Parkway, Mountain View, CA 94043, USA</a></div>"
    			+ "                    </div>"
    			+ "                </div>"
    			+ "            </td>"
    			+ "            <td width=\"8\" style=\"width:8px\"></td>"
    			+ "        </tr>"
    			+ "    </tbody>"
    			+ "</table>"
    			+ ""
    			+ "</body>"
    			+ ""
    			+ ""
    			+ "</html>");
    	
    	return sb.toString();
    }
	
}
