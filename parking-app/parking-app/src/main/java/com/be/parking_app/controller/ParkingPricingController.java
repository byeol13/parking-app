package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingPricingServiceImpl;
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
@RequestMapping("/parkingPricing")
public class ParkingPricingController {

    @Autowired
    private ParkingPricingServiceImpl service;

    @GetMapping("/getAllParkingPricing")
    private List<ParkingPricingDTO> getAllParkingPricing() {
        return service.getAllParkingPricingData();
    }
}
