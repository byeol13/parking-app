package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.entity.OffersEntity;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.mapper.Impl.OffersMapperImpl;
import com.be.parking_app.repository.OffersRepository;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.service.Interface.OffersServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OffersServiceImpl implements OffersServiceInterface {

    @Autowired
    private OffersRepository repository;

    @Autowired
    private OffersMapperImpl mapper;

    @Autowired
    private ParkingLotRepository parkingLotRepository;

    @Override
    public List<OffersDTO> getAllOffersData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OffersDTO getOfferObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public OffersDTO insertNewOfferObjectData(OffersDTO body) {
        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        OffersEntity newOfferEntity = new OffersEntity();
        newOfferEntity.setOfferCode(body.getOfferCode());
        newOfferEntity.setMaxAmountOffer(body.getMaxAmountOffer());
        newOfferEntity.setIssuedOn(body.getIssuedOn());
        newOfferEntity.setBookingDateFrom(body.getBookingDateFrom());
        newOfferEntity.setBookingDateTill(body.getBookingDateTill());
        newOfferEntity.setDiscountInAmount(body.getDiscountInAmount());
        newOfferEntity.setDiscountInPercent(body.getDiscountInPercent());
        newOfferEntity.setValidTill(body.getValidTill());
        newOfferEntity.setParkingLotEntity(parkingLotEntity);

        OffersEntity savedOffer = repository.save(newOfferEntity);

        return mapper.toDTO(savedOffer);
    }

    @Override
    public OffersDTO updateExistingOfferObjectData(OffersDTO body) {
        OffersEntity existingOfferEntity = repository.findById(body.getOffersId())
                .orElseThrow(() -> new EntityNotFoundException("Offer not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        existingOfferEntity.setOfferCode(body.getOfferCode());
        existingOfferEntity.setMaxAmountOffer(body.getMaxAmountOffer());
        existingOfferEntity.setIssuedOn(body.getIssuedOn());
        existingOfferEntity.setBookingDateFrom(body.getBookingDateFrom());
        existingOfferEntity.setBookingDateTill(body.getBookingDateTill());
        existingOfferEntity.setDiscountInAmount(body.getDiscountInAmount());
        existingOfferEntity.setDiscountInPercent(body.getDiscountInPercent());
        existingOfferEntity.setValidTill(body.getValidTill());
        existingOfferEntity.setParkingLotEntity(parkingLotEntity);

        OffersEntity updatedOffer = repository.save(existingOfferEntity);
        return mapper.toDTO(updatedOffer);
    }

    @Override
    public OffersDTO deleteOfferObjectData(Integer id) {
        OffersDTO deleted = getOfferObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
