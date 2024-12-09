package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.ParkingMonthlyPassDTO;
import com.be.parking_app.mapper.Interface.ParkingMonthlyPassServiceInterface;
import com.be.parking_app.repository.ParkingMonthlyPassRepository;
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
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingMonthlyPassDTO updateExistingParkingMonthlyPassObjectData(ParkingMonthlyPassDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingMonthlyPassDTO deleteParkingMonthlyPassObjectData(Integer id) {
        ParkingMonthlyPassDTO deleted = getParkingMonthlyPassObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
