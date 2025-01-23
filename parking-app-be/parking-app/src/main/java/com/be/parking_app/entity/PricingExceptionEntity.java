package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "pricing_exception")
public class PricingExceptionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer pricingExceptionId;

    @Column(name = "date", nullable = true, unique = false)
    private LocalDate date;

    @Column(name = "morning_hr_cost", nullable = true, unique = false)
    private Integer morningHrCost;

    @Column(name = "midday_hr_cost", nullable = true, unique = false)
    private Integer middayHrCost;

    @Column(name = "evening_hr_cost", nullable = true, unique = false)
    private Integer eveningHrCost;

    @Column(name = "all_day_cost", nullable = true)
    private Integer allDayCost;

    @ManyToOne
    @JoinColumn(name = "parking_lot_id", nullable = false)
    private ParkingLotEntity parkingLotEntity;
}
