package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.entity.ParkingPricingEntity;
import com.be.parking_app.entity.PricingExceptionEntity;
import com.be.parking_app.mapper.Impl.ParkingPricingMapperImpl;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.repository.ParkingPricingRepository;
import com.be.parking_app.service.Interface.ParkingPricingServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ParkingPricingServiceImpl implements ParkingPricingServiceInterface {

    @Autowired
    private ParkingPricingRepository repository;

    @Autowired
    private ParkingPricingMapperImpl mapper;

    @Autowired
    private ParkingLotRepository parkingLotRepository;

    @Override
    public List<ParkingPricingDTO> getAllParkingPricingData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ParkingPricingDTO getParkingPricingObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public ParkingPricingDTO insertNewParkingPricingObjectData(ParkingPricingDTO body) {
        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        ParkingPricingEntity newParkingPricingEntity = new ParkingPricingEntity();
        newParkingPricingEntity.setDayOfWeek(body.getDayOfWeek());
        newParkingPricingEntity.setMorningHrCost(body.getMorningHrCost());
        newParkingPricingEntity.setMiddayHrCost(body.getMiddayHrCost());
        newParkingPricingEntity.setEveningHrCost(body.getEveningHrCost());
        newParkingPricingEntity.setAllDayCost(body.getAllDayCost());
        newParkingPricingEntity.setParkingLotEntity(parkingLotEntity);

        ParkingPricingEntity savedParkingPricing = repository.save(newParkingPricingEntity);

        return mapper.toDTO(savedParkingPricing);
    }

    @Override
    public ParkingPricingDTO updateExistingParkingPricingObjectData(ParkingPricingDTO body) {
        ParkingPricingEntity existingParkingPricingEntity = repository.findById(body.getParkingPricingId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Pricing not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        existingParkingPricingEntity.setDayOfWeek(body.getDayOfWeek());
        existingParkingPricingEntity.setMorningHrCost(body.getMorningHrCost());
        existingParkingPricingEntity.setMiddayHrCost(body.getMiddayHrCost());
        existingParkingPricingEntity.setEveningHrCost(body.getEveningHrCost());
        existingParkingPricingEntity.setAllDayCost(body.getAllDayCost());
        existingParkingPricingEntity.setParkingLotEntity(parkingLotEntity);

        ParkingPricingEntity updatedParkingPricing = repository.save(existingParkingPricingEntity);
        return mapper.toDTO(updatedParkingPricing);
    }

    @Override
    public ParkingPricingDTO deleteParkingPricingObjectData(Integer id) {
        ParkingPricingDTO deleted = getParkingPricingObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
