package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.entity.ParkingMonthlyPassEntity;
import com.be.parking_app.mapper.Interface.CustomerMapperInterface;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import com.be.parking_app.mapper.Interface.ParkingMonthlyPassMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ParkingMonthlyPassMapperImpl implements ParkingMonthlyPassMapperInterface {

    @Autowired
    private CustomerMapperInterface customerMapper;

    @Autowired
    private ParkingLotMapperInterface parkingLotMapper;

    @Override
    public ParkingMonthlyPassDTO toDTO(ParkingMonthlyPassEntity entity) {
        if (entity == null) return null;

        ParkingMonthlyPassDTO dto = new ParkingMonthlyPassDTO();
        dto.setMonthlyPassId(entity.getMonthlyPassId());
        dto.setPurchaseDate(entity.getPurchaseDate());
        dto.setDurationInDays(entity.getDurationInDays());
        dto.setStartDate(entity.getStartDate());
        dto.setCost(entity.getCost());
        dto.setCustomerDTO(customerMapper.toDTO(entity.getCustomerEntity()));
        dto.setParkingLotDTO(parkingLotMapper.toDTO(entity.getParkingLotEntity()));

        return dto;
    }

    @Override
    public ParkingMonthlyPassEntity toEntity(ParkingMonthlyPassDTO dto) {
        if (dto == null) return null;

        ParkingMonthlyPassEntity entity = new ParkingMonthlyPassEntity();
        entity.setMonthlyPassId(dto.getMonthlyPassId());
        entity.setPurchaseDate(dto.getPurchaseDate());
        entity.setDurationInDays(dto.getDurationInDays());
        entity.setStartDate(dto.getStartDate());
        entity.setCost(dto.getCost());
        entity.setCustomerEntity(customerMapper.toEntity(dto.getCustomerDTO()));
        entity.setParkingLotEntity(parkingLotMapper.toEntity(dto.getParkingLotDTO()));

        return entity;
    }
}
