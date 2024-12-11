package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingPricingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getParkingPricingById")
    public ParkingPricingDTO getParkingPricingById(@Validated @RequestParam(name = "parkingPricingId") Integer id) {
        return service.getParkingPricingObjectById(id);
    }

    @PostMapping("/newParkingPricing")
    public ParkingPricingDTO createParkingPricing(@Validated @RequestBody ParkingPricingDTO body) {
        return service.insertNewParkingPricingObjectData(body);
    }
}
