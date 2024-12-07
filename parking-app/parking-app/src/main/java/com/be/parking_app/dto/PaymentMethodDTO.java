package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PaymentMethodDTO {
    private Integer paymentMethodId;
    private String cardType;
    private Integer cardNumber;
    private Integer expiryMonth;
    private Integer expiryYear;
    private Integer securityCode;
    private CustomerDTO customerDTO;
}
