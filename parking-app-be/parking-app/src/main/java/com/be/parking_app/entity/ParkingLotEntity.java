package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "parking_lot")
public class ParkingLotEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer parkingLotId;

    @Column(name = "number_of_blocks", nullable = true, unique = false)
    private Integer numberOfBlocks;

    @Column(name = "is_slot_available", nullable = true, unique = false)
    private String isSlotAvailable;

    @Column(name = "address", nullable = true, unique = false)
    private String address;

    @Column(name = "zip", nullable = true, unique = false)
    private String zip;

    @Column(name = "is_reentry_allowed", nullable = true, unique = false)
    private String isReentryAllowed;

    @Column(name = "operating_company_n", nullable = true, unique = false)
    private String operatingCompanyN;

    @Column(name = "is_valet_parking_available", nullable = true, unique = false)
    private String isValetParkingAvailable;

    @Column(name = "operational_in_night", nullable = true, unique = false)
    private String operationalInNight;

    @Column(name = "minimum_hr_to_pay", nullable = true, unique = false)
    private Integer minimumHrToPay;

    @Column(name = "is_monthly_pass_allow", nullable = true, unique = false)
    private String isMonthlyPassAllow;

    @Column(name = "monthly_pass_cost", nullable = true, unique = false)
    private Integer monthlyPassCost;
}
