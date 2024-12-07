package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class OffersDTO {
    private Integer offerId;
    private LocalDate issuedOn;
    private LocalDate validTill;
    private LocalDate bookingDateFrom;
    private LocalDate bookingDateTill;
    private Integer discountInPercent;
    private Integer maxAmountOffer;
    private Integer discountInAmount;
    private ParkingLotDTO parkingLotDTO;
}
