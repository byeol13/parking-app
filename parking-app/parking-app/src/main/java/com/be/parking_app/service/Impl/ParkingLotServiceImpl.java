package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.ParkingLotDTO;
import com.be.parking_app.mapper.Impl.ParkingLotMapperImpl;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.service.Interface.ParkingLotServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ParkingLotServiceImpl implements ParkingLotServiceInterface {

    @Autowired
    private ParkingLotRepository repository;

    @Autowired
    private ParkingLotMapperImpl mapper;

    @Override
    public List<ParkingLotDTO> getAllParkingLotData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ParkingLotDTO getParkingLotObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public ParkingLotDTO insertNewParkingLotObjectData(ParkingLotDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingLotDTO updateExistingParkingLotObjectData(ParkingLotDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingLotDTO deleteParkingLotObjectData(Integer id) {
        ParkingLotDTO deleted = getParkingLotObjectById(id);
        repository.deleteById(id);
        return deleted;
    }


}
