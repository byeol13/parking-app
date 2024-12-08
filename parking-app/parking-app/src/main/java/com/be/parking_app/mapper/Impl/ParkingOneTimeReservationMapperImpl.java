package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.entity.ParkingOneTimeReservationEntity;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import com.be.parking_app.mapper.Interface.ParkingOneTimeReservationMapperInterface;
import com.be.parking_app.mapper.Interface.VehicleMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ParkingOneTimeReservationMapperImpl implements ParkingOneTimeReservationMapperInterface {

    @Autowired
    private VehicleMapperInterface vehicleMapper;

    @Autowired
    private ParkingLotMapperInterface parkingLotMapper;

    @Override
    public ParkingOneTimeReservationDTO toDTO(ParkingOneTimeReservationEntity entity) {
        if (entity == null) return null;

        ParkingOneTimeReservationDTO dto = new ParkingOneTimeReservationDTO();
        dto.setOneTimeResId(entity.getOneTimeResId());
        dto.setStartTimestamp(entity.getStartTimestamp());
        dto.setPayForMinHr(entity.getPayForMinHr());
        dto.setBookingForHr(entity.getBookingForHr());
        dto.setBasicParkingCost(entity.getBasicParkingCost());
        dto.setOfferCode(entity.getOfferCode());
        dto.setNetCost(entity.getNetCost());
        dto.setIsPaid(entity.getIsPaid());
        dto.setParkingLotDTO(parkingLotMapper.toDTO(entity.getParkingLotEntity()));
        dto.setVehicleDTO(vehicleMapper.toDTO(entity.getVehicleEntity()));

        return dto;
    }

    @Override
    public ParkingOneTimeReservationEntity toEntity(ParkingOneTimeReservationDTO dto) {
        if (dto == null) return null;

        ParkingOneTimeReservationEntity entity = new ParkingOneTimeReservationEntity();
        entity.setOneTimeResId(dto.getOneTimeResId());
        entity.setStartTimestamp(dto.getStartTimestamp());
        entity.setPayForMinHr(dto.getPayForMinHr());
        entity.setBookingForHr(dto.getBookingForHr());
        entity.setBasicParkingCost(dto.getBasicParkingCost());
        entity.setOfferCode(dto.getOfferCode());
        entity.setNetCost(dto.getNetCost());
        entity.setIsPaid(dto.getIsPaid());
        entity.setParkingLotEntity(parkingLotMapper.toEntity(dto.getParkingLotDTO()));
        entity.setVehicleEntity(vehicleMapper.toEntity(dto.getVehicleDTO()));

        return entity;
    }
}
