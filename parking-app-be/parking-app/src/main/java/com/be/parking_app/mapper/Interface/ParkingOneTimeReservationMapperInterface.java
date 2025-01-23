package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.entity.ParkingOneTimeReservationEntity;

public interface ParkingOneTimeReservationMapperInterface {
    ParkingOneTimeReservationDTO toDTO(ParkingOneTimeReservationEntity entity);
    ParkingOneTimeReservationEntity toEntity(ParkingOneTimeReservationDTO dto);
}
