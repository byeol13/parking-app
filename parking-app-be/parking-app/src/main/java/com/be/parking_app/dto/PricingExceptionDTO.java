package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter
public class PricingExceptionDTO {
    private Integer pricingExceptionId;
    private LocalDate date;
    private Integer morningHrCost;
    private Integer middayHrCost;
    private Integer eveningHrCost;
    private Integer allDayCost;
    private ParkingLotDTO parkingLotDTO;
}
