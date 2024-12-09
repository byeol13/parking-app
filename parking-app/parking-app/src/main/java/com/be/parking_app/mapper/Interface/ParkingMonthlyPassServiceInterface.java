package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;

import java.util.List;

public interface ParkingMonthlyPassServiceInterface {

    List<ParkingMonthlyPassDTO> getAllParkingMonthlyPassData();

    ParkingMonthlyPassDTO getParkingMonthlyPassObjectById(Integer id);

    ParkingMonthlyPassDTO insertNewParkingMonthlyPassObjectData(ParkingMonthlyPassDTO body);

    ParkingMonthlyPassDTO updateExistingParkingMonthlyPassObjectData(ParkingMonthlyPassDTO body);

    ParkingMonthlyPassDTO deleteParkingMonthlyPassObjectData(Integer id);
}
