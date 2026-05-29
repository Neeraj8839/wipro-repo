package com.company.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.company.bean.MailDetail;

import com.company.service.MailService;

@RestController

@RequestMapping("/api")
public class MailController {

    @Autowired
    private MailService mailService;

    @PostMapping("/send-mail")
    public String sendMail(
            @RequestBody MailDetail mailDetail) {

        return mailService.sendMail(mailDetail);
    }

    @PostMapping("/send-mail-attachment")
    public String sendMailWithAttachment(
            @RequestBody MailDetail mailDetail) {

        return mailService
                .sendMailWithAttachment(mailDetail);
    }
}