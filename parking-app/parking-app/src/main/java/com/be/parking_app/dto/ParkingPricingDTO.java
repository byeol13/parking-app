package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ParkingPricingDTO {
    private Integer parkingPricingId;
    private Integer dayOfWeek;
    private Integer morningHrCost;
    private Integer middayHrCost;
    private Integer eveningHrCost;
    private Integer allDayCost;
    private ParkingLotDTO parkingLotDTO;
}
