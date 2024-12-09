package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.entity.ParkingPricingEntity;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import com.be.parking_app.mapper.Interface.ParkingPricingMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ParkingPricingMapperImpl implements ParkingPricingMapperInterface {

    @Autowired
    private ParkingLotMapperInterface parkingLotMapper;

    @Override
    public ParkingPricingDTO toDTO(ParkingPricingEntity entity) {
        if (entity == null) return null;

        ParkingPricingDTO dto = new ParkingPricingDTO();
        dto.setParkingPricingId(entity.getParkingPricingId());
        dto.setDayOfWeek(entity.getDayOfWeek());
        dto.setMorningHrCost(entity.getMorningHrCost());
        dto.setMiddayHrCost(entity.getMiddayHrCost());
        dto.setEveningHrCost(entity.getEveningHrCost());
        dto.setAllDayCost(entity.getAllDayCost());
        dto.setParkingLotDTO(parkingLotMapper.toDTO(entity.getParkingLotEntity()));

        return dto;
    }

    @Override
    public ParkingPricingEntity toEntity(ParkingPricingDTO dto) {
        if (dto == null) return null;

        ParkingPricingEntity entity = new ParkingPricingEntity();
        entity.setParkingPricingId(dto.getParkingPricingId());
        entity.setDayOfWeek(dto.getDayOfWeek());
        entity.setMorningHrCost(dto.getMorningHrCost());
        entity.setMiddayHrCost(dto.getMiddayHrCost());
        entity.setEveningHrCost(dto.getEveningHrCost());
        entity.setAllDayCost(dto.getAllDayCost());
        entity.setParkingLotEntity(parkingLotMapper.toEntity(dto.getParkingLotDTO()));

        return entity;
    }
}
