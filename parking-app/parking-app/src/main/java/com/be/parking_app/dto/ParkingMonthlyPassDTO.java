package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter
public class ParkingMonthlyPassDTO {
    private Integer monthlyPassId;
    private LocalDate purchaseDate;
    private Integer durationInDays;
    private LocalDate startDate;
    private BigDecimal cost;
    private CustomerDTO customerDTO;
    private ParkingLotDTO parkingLotDTO;
}
