package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "parking_monthly_pass")
public class ParkingMonthlyPassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer monthlyPassId;

    @Column(name = "purchase_date", nullable = true, unique = false)
    private LocalDate purchaseDate;

    @Column(name = "duration_in_days", nullable = true, unique = false)
    private Integer durationInDays;

    @Column(name = "start_date", nullable = true, unique = false)
    private LocalDate startDate;

    @Column(name = "cost", nullable = true, unique = false)
    private BigDecimal cost;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customerEntity;

    @ManyToOne
    @JoinColumn(name = "parking_lot_id", nullable = false)
    private ParkingLotEntity parkingLotEntity;
}
