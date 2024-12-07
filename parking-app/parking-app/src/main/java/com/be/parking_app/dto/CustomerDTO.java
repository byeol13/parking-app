package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class CustomerDTO {
    private Integer customerId;
    private LocalDate registrationDate;
    private String isRegularCusto;
    private String contactNumber;
    private String firstName;
    private String lastName;
    private String billingAddress;
}
