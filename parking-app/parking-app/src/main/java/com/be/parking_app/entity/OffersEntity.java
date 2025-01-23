package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "offers")
public class OffersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer offersId;

    @Column(name = "issued_on", nullable = true, unique = false)
    private LocalDate issuedOn;

    @Column(name = "valid_till", nullable = true, unique = false)
    private LocalDate validTill;

    @Column(name = "booking_date_from", nullable = true, unique = false)
    private LocalDate bookingDateFrom;

    @Column(name = "booking_date_till", nullable = true, unique = false)
    private LocalDate bookingDateTill;

    @Column(name = "discount_in_percentage", nullable = true, unique = false)
    private Integer discountInPercent;

    @Column(name = "max_amount_offer", nullable = true, unique = false)
    private Integer maxAmountOffer;

    @Column(name = "discount_in_amount", nullable = true, unique = false)
    private Integer discountInAmount;

    @Column(name = "offer_code", nullable = true, unique = false)
    private String offerCode;

    @ManyToOne
    @JoinColumn(name = "parking_lot_id", nullable = false)
    private ParkingLotEntity parkingLotEntity;
}
