package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingLotDTO;
import com.be.parking_app.service.Impl.ParkingLotServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getParkingLotById")
    public ParkingLotDTO getParkingLotById(@Validated @RequestParam(name = "parkingLotId") Integer id) {
        return service.getParkingLotObjectById(id);
    }

    @PostMapping("/newParkingLot")
    public ParkingLotDTO createParkingLot(@Validated @RequestBody ParkingLotDTO body) {
        return service.insertNewParkingLotObjectData(body);
    }

    @PutMapping("/updateParkingLot")
    public ParkingLotDTO updateParkingLot(@Validated @RequestBody ParkingLotDTO body) {
        return service.updateExistingParkingLotObjectData(body);
    }
}

