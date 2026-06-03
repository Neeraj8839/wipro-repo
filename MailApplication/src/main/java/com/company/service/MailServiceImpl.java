package com.company.service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.core.io.FileSystemResource;

import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.mail.javamail.MimeMessageHelper;

import org.springframework.stereotype.Service;

import com.company.bean.MailDetail;

import jakarta.mail.internet.MimeMessage;

@Service
public class MailServiceImpl
        implements MailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public String sendMail(
            MailDetail mailDetail) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setFrom(sender);

            message.setTo(
                    mailDetail.getRecipient());

            message.setSubject(
                    mailDetail.getSubject());

            message.setText(
                    mailDetail.getMsgBody());

            mailSender.send(message);

            return "Email Sent Successfully";

        } catch (Exception e) {

            return "Error While Sending Mail";
        }
    }

    @Override
    public String sendMailWithAttachment(
            MailDetail mailDetail) {

        try {

            MimeMessage mimeMessage =
                    mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(
                            mimeMessage,
                            true
                    );

            helper.setFrom(sender);

            helper.setTo(
                    mailDetail.getRecipient());

            helper.setSubject(
                    mailDetail.getSubject());

            helper.setText(
                    mailDetail.getMsgBody());

            FileSystemResource file =
                    new FileSystemResource(
                            new File(
                                    mailDetail
                                            .getAttachment()
                            )
                    );

            helper.addAttachment(
                    file.getFilename(),
                    file
            );

            mailSender.send(mimeMessage);

            return "Mail Sent Successfully";

        } catch (Exception e) {

            return "Error While Sending Mail";
        }
    }
}