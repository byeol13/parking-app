package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.entity.ParkingMonthlyPassEntity;

public interface ParkingMonthlyPassMapperInterface {
    ParkingMonthlyPassDTO toDTO(ParkingMonthlyPassEntity entity);
    ParkingMonthlyPassEntity toEntity(ParkingMonthlyPassDTO dto);
}
