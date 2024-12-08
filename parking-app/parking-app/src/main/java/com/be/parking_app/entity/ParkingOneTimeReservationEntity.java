package com.be.parking_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
@Entity
@Table(name = "parking_one_time_reservation")
public class ParkingOneTimeReservationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer oneTimeResId;

    @Column(name = "start_timestamp", nullable = true, unique = false)
    private Timestamp startTimestamp;

    @Column(name = "pay_for_min_hr", nullable = true, unique = false)
    private String payForMinHr;

    @Column(name = "booking_for_hr", nullable = true, unique = false)
    private Integer bookingForHr;

    @Column(name = "basic_parking_cost", nullable = true, unique = false)
    private Integer basicParkingCost;

    @Column(name = "offer_code", nullable = true, unique = false)
    private String offerCode;

    @Column(name = "net_cost", nullable = true, unique = false)
    private Integer netCost;

    @Column(name = "is_paid", nullable = true, unique = false)
    private String isPaid;

    @ManyToOne
    @JoinColumn(name = "customer_vehicle_id", nullable = false)
    private VehicleEntity vehicleEntity;

    @ManyToOne
    @JoinColumn(name = "parking_lot_id", nullable = false)
    private ParkingLotEntity parkingLotEntity;
}
