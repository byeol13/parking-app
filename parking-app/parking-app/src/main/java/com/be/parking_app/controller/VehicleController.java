package com.be.parking_app.controller;

import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.VehicleServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/vehicles")
public class VehicleController {

    @Autowired
    private VehicleServiceImpl service;

    @GetMapping("/getAllVehicles")
    private List<VehicleDTO> getAllVehicle() {
        return service.getAllVehicleData();
    }

    @GetMapping("/getVehicleById")
    public VehicleDTO getVehicleById(@Validated @RequestParam(name = "vehicleId") Integer id) {
        return service.getVehicleObjectById(id);
    }

    @PostMapping("/newVehicle")
    public VehicleDTO createVehicle(@Validated @RequestBody VehicleDTO body) {
        return service.insertNewVehicleObjectData(body);
    }

    @PutMapping("/updateVehicle")
    public VehicleDTO updateVehicle(@Validated @RequestBody VehicleDTO   body) {
        return service.updateExistingVehicleObjectData(body);
    }

    @DeleteMapping("/deleteVehicle/{id}")
    public VehicleDTO deleteVehicle(@Validated @PathVariable("id") Integer id) {
        return service.deleteVehicleObjectData(id);
    }
}
