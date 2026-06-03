package com.example.paymentservice.service;

import com.example.paymentservice.entity.Payment;
import com.example.paymentservice.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository repository;

    public Payment doPayment(Payment payment){

        payment.setPaymentStatus("SUCCESS");
        payment.setTransactionId("TXN"+System.currentTimeMillis());

        return repository.save(payment);
    }

    public Payment findPaymentByOrderId(int orderId){

        return repository.findByOrderId(orderId);
    }
}