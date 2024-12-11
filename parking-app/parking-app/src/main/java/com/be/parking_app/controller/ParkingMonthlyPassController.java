package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingMonthlyPassServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/parkingMonthlyPass")
public class ParkingMonthlyPassController {

    @Autowired
    private ParkingMonthlyPassServiceImpl service;

    @GetMapping("/getAllMonthlyPasses")
    private List<ParkingMonthlyPassDTO> getAllParkingMonthlyPasses() {
        return service.getAllParkingMonthlyPassData();
    }

    @GetMapping("/getMonthlyPassById")
    public ParkingMonthlyPassDTO getParkingMonthlyPassById(@Validated @RequestParam(name = "monthlyPassId") Integer id) {
        return service.getParkingMonthlyPassObjectById(id);
    }

    @PostMapping("/newMonthlyPass")
    public ParkingMonthlyPassDTO createParkingMonthlyPass(@Validated @RequestBody ParkingMonthlyPassDTO body) {
        return service.insertNewParkingMonthlyPassObjectData(body);
    }

    @PutMapping("/updateMonthlyPass")
    public ParkingMonthlyPassDTO updateParkingMonthlyPass(@Validated @RequestBody ParkingMonthlyPassDTO   body) {
        return service.updateExistingParkingMonthlyPassObjectData(body);
    }

    @DeleteMapping("/deleteMonthlyPass/{id}")
    public ParkingMonthlyPassDTO deleteParkingMonthlyPass(@Validated @PathVariable("id") Integer id) {
        return service.deleteParkingMonthlyPassObjectData(id);
    }
}
