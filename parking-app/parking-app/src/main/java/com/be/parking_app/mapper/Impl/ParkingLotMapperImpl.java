package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.ParkingLotDTO;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class ParkingLotMapperImpl implements ParkingLotMapperInterface {

    @Override
    public ParkingLotDTO toDTO(ParkingLotEntity entity) {
        if (entity == null) return null;

        ParkingLotDTO dto = new ParkingLotDTO();

        dto.setParkingLotId(entity.getParkingLotId());
        dto.setNumberOfBlocks(entity.getNumberOfBlocks());
        dto.setIsSlotAvailable(entity.getIsSlotAvailable());
        dto.setAddress(entity.getAddress());
        dto.setZip(entity.getZip());
        dto.setIsReentryAllowed(entity.getIsReentryAllowed());
        dto.setOperatingCompanyN(entity.getOperatingCompanyN());
        dto.setIsValetParkingAvailable(entity.getIsValetParkingAvailable());
        dto.setOperationalInNight(entity.getOperationalInNight());
        dto.setMinimumHrToPay(entity.getMinimumHrToPay());
        dto.setIsMonthlyPassAllow(entity.getIsMonthlyPassAllow());
        dto.setMonthlyPassCost(entity.getMonthlyPassCost());

        return dto;
    }

    @Override
    public ParkingLotEntity toEntity(ParkingLotDTO dto) {
        if (dto == null) return null;

        ParkingLotEntity entity = new ParkingLotEntity();

        entity.setParkingLotId(dto.getParkingLotId());
        entity.setParkingLotId(dto.getParkingLotId());
        entity.setNumberOfBlocks(dto.getNumberOfBlocks());
        entity.setIsSlotAvailable(dto.getIsSlotAvailable());
        entity.setAddress(dto.getAddress());
        entity.setZip(dto.getZip());
        entity.setIsReentryAllowed(dto.getIsReentryAllowed());
        entity.setOperatingCompanyN(dto.getOperatingCompanyN());
        entity.setIsValetParkingAvailable(dto.getIsValetParkingAvailable());
        entity.setOperationalInNight(dto.getOperationalInNight());
        entity.setMinimumHrToPay(dto.getMinimumHrToPay());
        entity.setIsMonthlyPassAllow(dto.getIsMonthlyPassAllow());
        entity.setMonthlyPassCost(dto.getMonthlyPassCost());

        return entity;
    }
}
