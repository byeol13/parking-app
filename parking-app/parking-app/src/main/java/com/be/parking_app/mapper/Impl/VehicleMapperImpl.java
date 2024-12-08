package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Interface.CustomerMapperInterface;
import com.be.parking_app.mapper.Interface.VehicleMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VehicleMapperImpl implements VehicleMapperInterface {

    @Autowired
    private CustomerMapperInterface customerMapper;

    @Override
    public VehicleDTO toDTO(VehicleEntity entity) {
        if (entity == null) return null;

        VehicleDTO dto = new VehicleDTO();
        dto.setVehicleId(entity.getVehicleId());
        dto.setVehicleNumber(entity.getVehicleNumber());
        dto.setCustomerDTO(customerMapper.toDTO(entity.getCustomerEntity()));

        return dto;
    }

    @Override
    public VehicleEntity toEntity(VehicleDTO dto) {
        if (dto == null) return null;

        VehicleEntity entity = new VehicleEntity();
        entity.setVehicleId(dto.getVehicleId());
        entity.setVehicleNumber(dto.getVehicleNumber());
        entity.setCustomerEntity(customerMapper.toEntity(dto.getCustomerDTO()));

        return entity;
    }
}
