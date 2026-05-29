package com.example.paymentservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "PAYMENT_TB")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    private String paymentStatus;

    private String transactionId;

    private int orderId;

    private double amount;
}