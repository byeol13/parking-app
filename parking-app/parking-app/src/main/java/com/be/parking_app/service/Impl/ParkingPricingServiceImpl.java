package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.ParkingPricingDTO;
import com.be.parking_app.mapper.Impl.ParkingPricingMapperImpl;
import com.be.parking_app.repository.ParkingPricingRepository;
import com.be.parking_app.service.Interface.ParkingPricingServiceInterface;
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
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingPricingDTO updateExistingParkingPricingObjectData(ParkingPricingDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingPricingDTO deleteParkingPricingObjectData(Integer id) {
        ParkingPricingDTO deleted = getParkingPricingObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
