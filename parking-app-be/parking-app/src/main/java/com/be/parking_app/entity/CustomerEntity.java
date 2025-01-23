package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "customer")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer customerId;

    @Column(name = "registration_date", nullable = true, unique = false)
    private LocalDate registrationDate;

    @Column(name = "is_regular_custo", nullable = true, unique = false)
    private String isRegularCusto;

    @Column(name = "contact_number", nullable = true, unique = false)
    private Integer contactNumber;

    @Column(name = "first_name", nullable = true, unique = false)
    private String firstName;

    @Column(name = "last_name", nullable = true, unique = false)
    private String lastName;

    @Column(name = "billing_address", nullable = true, unique = false)
    private String billingAddress;
}