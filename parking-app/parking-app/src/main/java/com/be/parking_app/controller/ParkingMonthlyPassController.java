package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingMonthlyPassServiceImpl;
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
@RequestMapping("/parkingMonthlyPass")
public class ParkingMonthlyPassController {

    @Autowired
    private ParkingMonthlyPassServiceImpl service;

    @GetMapping("/getAllMonthlyPasses")
    private List<ParkingMonthlyPassDTO> getAllMonthlyPasses() {
        return service.getAllParkingMonthlyPassData();
    }
}
