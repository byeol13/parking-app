package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
public class ParkingOneTimeReservationDTO {
    private Integer oneTimeResId;
    private Timestamp startTimestamp;
    private String payForMinHr;
    private Integer bookingForHr;
    private Integer basicParkingCost;
    private String offerCode;
    private Integer netCost;
    private String isPaid;
    private VehicleDTO vehicleDTO;
    private ParkingLotDTO parkingLotDTO;
}
