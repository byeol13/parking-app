package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.entity.VehicleEntity;

public interface VehicleMapperInterface {
    VehicleDTO toDTO(VehicleEntity entity);
    VehicleEntity toEntity(VehicleDTO dto);
}
