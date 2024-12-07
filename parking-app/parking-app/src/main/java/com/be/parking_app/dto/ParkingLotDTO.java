package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class ParkingLotDTO {
    private Integer id;
    private Integer numberOfBlocks;
    private String isSlotAvailable;
    private String address;
    private String zip;
    private String isReentryAllowed;
    private String operatingComapnyN;
    private String isValetParkingAvailable;
    private String operationalInNight;
    private String minimumHrToPay;
    private String isMonthlyPassAllow;
    private Integer monthlyPassCost;
}
