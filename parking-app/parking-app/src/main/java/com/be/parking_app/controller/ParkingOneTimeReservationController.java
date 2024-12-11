package com.be.parking_app.controller;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.ParkingOneTimeReservationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getOneTimeReservationById")
    public ParkingOneTimeReservationDTO getParkingOneTimeReservationById(@Validated @RequestParam(name = "oneTimeReservationId") Integer id) {
        return service.getParkingOneTimeReservationObjectById(id);
    }

    @PostMapping("/newOneTimeReservation")
    public ParkingOneTimeReservationDTO createParkingOneTimeReservation(@Validated @RequestBody ParkingOneTimeReservationDTO body) {
        return service.insertNewParkingOneTimeReservationObjectData(body);
    }

    @PutMapping("/updateOneTimeReservation")
    public ParkingOneTimeReservationDTO updateParkingOneTimeReservation(@Validated @RequestBody ParkingOneTimeReservationDTO body) {
        return service.updateExistingParkingOneTimeReservationObjectData(body);
    }
}
