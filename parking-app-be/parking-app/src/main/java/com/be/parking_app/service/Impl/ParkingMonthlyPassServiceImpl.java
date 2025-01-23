package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.entity.CustomerEntity;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.entity.ParkingMonthlyPassEntity;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Impl.ParkingMonthlyPassMapperImpl;
import com.be.parking_app.repository.CustomerRepository;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.repository.ParkingMonthlyPassRepository;
import com.be.parking_app.service.Interface.ParkingMonthlyPassServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ParkingMonthlyPassServiceImpl implements ParkingMonthlyPassServiceInterface {

    @Autowired
    private ParkingMonthlyPassRepository repository;

    @Autowired
    private ParkingMonthlyPassMapperImpl mapper;

    @Autowired
    private ParkingLotRepository parkingLotRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<ParkingMonthlyPassDTO> getAllParkingMonthlyPassData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ParkingMonthlyPassDTO getParkingMonthlyPassObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public ParkingMonthlyPassDTO insertNewParkingMonthlyPassObjectData(ParkingMonthlyPassDTO body) {
        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        ParkingMonthlyPassEntity newParkingMonthlyPassEntity = new ParkingMonthlyPassEntity();
        newParkingMonthlyPassEntity.setCost(body.getCost());
        newParkingMonthlyPassEntity.setDurationInDays(body.getDurationInDays());
        newParkingMonthlyPassEntity.setPurchaseDate(body.getPurchaseDate());
        newParkingMonthlyPassEntity.setStartDate(body.getStartDate());
        newParkingMonthlyPassEntity.setCustomerEntity(customerEntity);
        newParkingMonthlyPassEntity.setParkingLotEntity(parkingLotEntity);

        ParkingMonthlyPassEntity savedParkingMonthlyPass = repository.save(newParkingMonthlyPassEntity);

        return mapper.toDTO(savedParkingMonthlyPass);
    }

    @Override
    public ParkingMonthlyPassDTO updateExistingParkingMonthlyPassObjectData(ParkingMonthlyPassDTO body) {
        ParkingMonthlyPassEntity existingParkingMonthlyPassEntity = repository.findById(body.getMonthlyPassId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Monthly Pass not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        existingParkingMonthlyPassEntity.setCost(body.getCost());
        existingParkingMonthlyPassEntity.setDurationInDays(body.getDurationInDays());
        existingParkingMonthlyPassEntity.setPurchaseDate(body.getPurchaseDate());
        existingParkingMonthlyPassEntity.setStartDate(body.getStartDate());
        existingParkingMonthlyPassEntity.setCustomerEntity(customerEntity);
        existingParkingMonthlyPassEntity.setParkingLotEntity(parkingLotEntity);

        ParkingMonthlyPassEntity updatedParkingMonthlyPass = repository.save(existingParkingMonthlyPassEntity);
        return mapper.toDTO(updatedParkingMonthlyPass);
    }

    @Override
    public ParkingMonthlyPassDTO deleteParkingMonthlyPassObjectData(Integer id) {
        ParkingMonthlyPassDTO deleted = getParkingMonthlyPassObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
