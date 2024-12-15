package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "payment_method")
public class PaymentMethodEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer paymentMethodId;

    @Column(name = "card_type", nullable = true, unique = false)
    private String cardType;

    @Column(name = "card_number", nullable = true, unique = false)
    private Long cardNumber;

    @Column(name = "expiry_month", nullable = true, unique = false)
    private Integer expiryMonth;

    @Column(name = "expiry_year", nullable = true, unique = false)
    private Integer expiryYear;

    @Column(name = "security_code", nullable = true, unique = false)
    private Integer securityCode;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customerEntity;
}
