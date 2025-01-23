package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.ParkingPricingDTO;

import java.util.List;

public interface ParkingPricingServiceInterface {

    List<ParkingPricingDTO> getAllParkingPricingData();

    ParkingPricingDTO getParkingPricingObjectById(Integer id);

    ParkingPricingDTO insertNewParkingPricingObjectData(ParkingPricingDTO body);

    ParkingPricingDTO updateExistingParkingPricingObjectData(ParkingPricingDTO body);

    ParkingPricingDTO deleteParkingPricingObjectData(Integer id);
}
