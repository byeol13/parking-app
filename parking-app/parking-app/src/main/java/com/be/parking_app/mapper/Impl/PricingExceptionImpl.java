package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.entity.PricingExceptionEntity;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import com.be.parking_app.mapper.Interface.PricingExceptionMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PricingExceptionImpl implements PricingExceptionMapperInterface {

    @Autowired
    private ParkingLotMapperInterface parkingLotMapper;

    @Override
    public PricingExceptionDTO toDTO(PricingExceptionEntity entity) {
        if (entity == null) return null;

        PricingExceptionDTO dto = new PricingExceptionDTO();
        dto.setPricingExceptionId(entity.getPricingExceptionId());
        dto.setDate(entity.getDate());
        dto.setMorningHrCost(entity.getMorningHrCost());
        dto.setMiddayHrCost(entity.getMiddayHrCost());
        dto.setEveningHrCost(entity.getEveningHrCost());
        dto.setAllDayCost(entity.getAllDayCost());
        dto.setParkingLotDTO(parkingLotMapper.toDTO(entity.getParkingLotEntity()));

        return dto;
    }

    @Override
    public PricingExceptionEntity toEntity(PricingExceptionDTO dto) {
        if (dto == null) return null;

        PricingExceptionEntity entity = new PricingExceptionEntity();
        entity.setPricingExceptionId(dto.getPricingExceptionId());
        entity.setDate(dto.getDate());
        entity.setMorningHrCost(dto.getMorningHrCost());
        entity.setMiddayHrCost(dto.getMiddayHrCost());
        entity.setEveningHrCost(dto.getEveningHrCost());
        entity.setAllDayCost(dto.getAllDayCost());
        entity.setParkingLotEntity(parkingLotMapper.toEntity(dto.getParkingLotDTO()));

        return entity;
    }
}
