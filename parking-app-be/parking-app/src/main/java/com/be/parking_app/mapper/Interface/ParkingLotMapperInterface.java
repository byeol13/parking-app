package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.ParkingLotDTO;
import com.be.parking_app.entity.ParkingLotEntity;

public interface ParkingLotMapperInterface {
    ParkingLotDTO toDTO(ParkingLotEntity entity);
    ParkingLotEntity toEntity(ParkingLotDTO dto);
}
