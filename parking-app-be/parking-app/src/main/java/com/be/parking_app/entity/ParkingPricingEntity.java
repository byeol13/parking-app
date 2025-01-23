package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "parking_pricing")
public class ParkingPricingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer parkingPricingId;

    @Column(name = "day_of_week", nullable = true, unique = false)
    private Integer dayOfWeek;

    @Column(name = "morning_hr_cost", nullable = true, unique = false)
    private Integer morningHrCost;

    @Column(name = "midday_hr_cost", nullable = true, unique = false)
    private Integer middayHrCost;

    @Column(name = "evening_hr_cost", nullable = true, unique = false)
    private Integer eveningHrCost;

    @Column(name = "all_day_cost", nullable = true, unique = false)
    private Integer allDayCost;

    @ManyToOne
    @JoinColumn(name = "parking_lot_id", nullable = false)
    private ParkingLotEntity parkingLotEntity;
}
