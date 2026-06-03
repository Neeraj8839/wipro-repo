package com.example.orderservice.service;

import com.example.orderservice.common.Payment;
import com.example.orderservice.common.TransactionRequest;
import com.example.orderservice.common.TransactionResponse;
import com.example.orderservice.entity.Order;
import com.example.orderservice.repository.OrderRepository;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private RestTemplate restTemplate;

    @CircuitBreaker(
            name = "paymentService",
            fallbackMethod = "paymentFallback"
    )
    public TransactionResponse saveOrder(
            TransactionRequest request){

        Order order = request.getOrder();

        repository.save(order);

        Payment payment = new Payment();

        payment.setOrderId(order.getId());

        payment.setAmount(order.getPrice() * order.getQty());

        Payment paymentResponse =
                restTemplate.postForObject(
                        "http://localhost:8082/payment/doPayment",
                        payment,
                        Payment.class
                );

        return new TransactionResponse(
                order,
                paymentResponse.getAmount(),
                paymentResponse.getTransactionId(),
                paymentResponse.getPaymentStatus()
        );

    }

    // FALLBACK METHOD
    public TransactionResponse paymentFallback(
            TransactionRequest request,
            Exception ex){

        Order order = request.getOrder();

        return new TransactionResponse(
                order,
                0,
                "NO TRANSACTION",
                "Payment Service Down! Try Again Later"
        );

    }

}