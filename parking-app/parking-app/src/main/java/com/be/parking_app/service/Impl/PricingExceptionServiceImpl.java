package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.entity.CustomerEntity;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.entity.PricingExceptionEntity;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Impl.PricingExceptionMapperImpl;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.repository.PricingExceptionRepository;
import com.be.parking_app.service.Interface.PricingExceptionServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PricingExceptionServiceImpl implements PricingExceptionServiceInterface {

    @Autowired
    private PricingExceptionRepository repository;

    @Autowired
    private PricingExceptionMapperImpl mapper;

    @Autowired
    private ParkingLotRepository parkingLotRepository;

    @Override
    public List<PricingExceptionDTO> getAllPricingExceptionData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PricingExceptionDTO getPricingExceptionObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public PricingExceptionDTO insertNewPricingExceptionObjectData(PricingExceptionDTO body) {
        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        PricingExceptionEntity newPricingExceptionEntity = new PricingExceptionEntity();
        newPricingExceptionEntity.setDate(body.getDate());
        newPricingExceptionEntity.setAllDayCost(body.getAllDayCost());
        newPricingExceptionEntity.setMorningHrCost(body.getMorningHrCost());
        newPricingExceptionEntity.setMiddayHrCost(body.getMiddayHrCost());
        newPricingExceptionEntity.setEveningHrCost(body.getEveningHrCost());
        newPricingExceptionEntity.setParkingLotEntity(parkingLotEntity);

        PricingExceptionEntity savedPricingException = repository.save(newPricingExceptionEntity);

        return mapper.toDTO(savedPricingException);
    }

    @Override
    public PricingExceptionDTO updateExistingPricingExceptionObjectData(PricingExceptionDTO body) {
        PricingExceptionEntity existingPricingExceptionEntity = repository.findById(body.getPricingExceptionId())
                .orElseThrow(() -> new EntityNotFoundException("Pricing Exception not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        existingPricingExceptionEntity.setDate(body.getDate());
        existingPricingExceptionEntity.setAllDayCost(body.getAllDayCost());
        existingPricingExceptionEntity.setMorningHrCost(body.getMorningHrCost());
        existingPricingExceptionEntity.setMiddayHrCost(body.getMiddayHrCost());
        existingPricingExceptionEntity.setEveningHrCost(body.getEveningHrCost());
        existingPricingExceptionEntity.setParkingLotEntity(parkingLotEntity);

        PricingExceptionEntity updatedPricingException = repository.save(existingPricingExceptionEntity);
        return mapper.toDTO(updatedPricingException);
    }

    @Override
    public PricingExceptionDTO deletePricingExceptionObjectData(Integer id) {
        PricingExceptionDTO deleted = getPricingExceptionObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
