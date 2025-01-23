package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.entity.OffersEntity;
import com.be.parking_app.mapper.Interface.OffersMapperInterface;
import com.be.parking_app.mapper.Interface.ParkingLotMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OffersMapperImpl implements OffersMapperInterface {

    @Autowired
    private ParkingLotMapperInterface parkingLotMapper;

    @Override
    public OffersDTO toDTO(OffersEntity entity) {
        if (entity == null) return null;

        OffersDTO dto = new OffersDTO();
        dto.setOffersId(entity.getOffersId());
        dto.setIssuedOn(entity.getIssuedOn());
        dto.setValidTill(entity.getValidTill());
        dto.setBookingDateFrom(entity.getBookingDateFrom());
        dto.setBookingDateTill(entity.getBookingDateTill());
        dto.setDiscountInPercent(entity.getDiscountInPercent());
        dto.setMaxAmountOffer(entity.getMaxAmountOffer());
        dto.setDiscountInAmount(entity.getDiscountInAmount());
        dto.setOfferCode(entity.getOfferCode());
        dto.setParkingLotDTO(parkingLotMapper.toDTO(entity.getParkingLotEntity()));

        return dto;
    }

    @Override
    public OffersEntity toEntity(OffersDTO dto) {
        if (dto == null) return null;

        OffersEntity entity = new OffersEntity();
        entity.setOffersId(dto.getOffersId());
        entity.setIssuedOn(dto.getIssuedOn());
        entity.setValidTill(dto.getValidTill());
        entity.setBookingDateFrom(dto.getBookingDateFrom());
        entity.setBookingDateTill(dto.getBookingDateTill());
        entity.setDiscountInPercent(dto.getDiscountInPercent());
        entity.setMaxAmountOffer(dto.getMaxAmountOffer());
        entity.setDiscountInAmount(dto.getDiscountInAmount());
        entity.setOfferCode(dto.getOfferCode());
        entity.setParkingLotEntity(parkingLotMapper.toEntity(dto.getParkingLotDTO()));

        return entity;
    }
}
