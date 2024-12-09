package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.mapper.Impl.ParkingOneTimeReservationMapperImpl;
import com.be.parking_app.repository.ParkingOneTimeReservationRepository;
import com.be.parking_app.service.Interface.ParkingOneTimeReservationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ParkingOneTimeReservationServiceImpl implements ParkingOneTimeReservationServiceInterface {

    @Autowired
    private ParkingOneTimeReservationRepository repository;

    @Autowired
    private ParkingOneTimeReservationMapperImpl mapper;

    @Override
    public List<ParkingOneTimeReservationDTO> getAllParkingOneTimeReservationData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ParkingOneTimeReservationDTO getParkingOneTimeReservationObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public ParkingOneTimeReservationDTO insertNewParkingOneTimeReservationObjectData(ParkingOneTimeReservationDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingOneTimeReservationDTO updateExistingParkingOneTimeReservationObjectData(ParkingOneTimeReservationDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public ParkingOneTimeReservationDTO deleteParkingOneTimeReservationObjectData(Integer id) {
        ParkingOneTimeReservationDTO deleted = getParkingOneTimeReservationObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
