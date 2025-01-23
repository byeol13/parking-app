package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class OffersDTO {
    private Integer offersId;
    private LocalDate issuedOn;
    private LocalDate validTill;
    private LocalDate bookingDateFrom;
    private LocalDate bookingDateTill;
    private Integer discountInPercent;
    private Integer maxAmountOffer;
    private Integer discountInAmount;
    private String offerCode;
    private ParkingLotDTO parkingLotDTO;
}
