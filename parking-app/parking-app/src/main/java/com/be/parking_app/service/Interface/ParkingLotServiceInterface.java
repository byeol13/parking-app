package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.ParkingLotDTO;

import java.util.List;

public interface ParkingLotServiceInterface {

    List<ParkingLotDTO> getAllParkingLotData();
    ParkingLotDTO getParkingLotObjectById(Integer id);
    ParkingLotDTO insertNewCategoryObjectData(ParkingLotDTO body);
    ParkingLotDTO updateExistingParkingLotObjectData(ParkingLotDTO body);
    ParkingLotDTO deleteParkingLotObjectData(Integer id);
}
