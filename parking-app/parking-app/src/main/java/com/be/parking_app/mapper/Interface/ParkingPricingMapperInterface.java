package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.entity.ParkingPricingEntity;

public interface ParkingPricingMapperInterface {

    ParkingPricingDTO toDTO(ParkingPricingEntity entity);
    ParkingPricingEntity toEntity(ParkingPricingDTO dto);
}
