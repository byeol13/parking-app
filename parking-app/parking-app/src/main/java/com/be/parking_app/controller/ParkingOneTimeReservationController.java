package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingOneTimeReservationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/vehicles")
public class ParkingOneTimeReservationController {

    @Autowired
    private ParkingOneTimeReservationServiceImpl service;

    @GetMapping("/getAllOneTimeReservations")
    private List<ParkingOneTimeReservationDTO> getAllParkingOneTimeReservations() {
        return service.getAllParkingOneTimeReservationData();
    }
}
