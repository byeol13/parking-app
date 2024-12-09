package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.VehicleDTO;

import java.util.List;

public interface VehicleServiceInterface {

    List<VehicleDTO> getAllVehicleData();

    VehicleDTO getVehicleObjectById(Integer id);

    VehicleDTO insertNewVehicleObjectData(VehicleDTO body);

    VehicleDTO updateExistingVehicleObjectData(VehicleDTO body);

    VehicleDTO deleteVehicleObjectData(Integer id);
}
