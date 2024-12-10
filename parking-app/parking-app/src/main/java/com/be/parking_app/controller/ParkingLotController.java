package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingLotDTO;
import com.be.parking_app.service.Impl.ParkingLotServiceImpl;
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
@RequestMapping("/parking-lot")
public class ParkingLotController {

    @Autowired
    private ParkingLotServiceImpl service;

    @GetMapping("/getAllParkingLots")
    public List<ParkingLotDTO> getAllParkingLot() {
        return service.getAllParkingLotData();
    }
}
