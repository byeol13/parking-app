package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.mapper.Impl.VehicleMapperImpl;
import com.be.parking_app.repository.VehicleRepository;
import com.be.parking_app.service.Interface.VehicleServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class VehicleServiceImpl implements VehicleServiceInterface {

    @Autowired
    private VehicleRepository repository;

    @Autowired
    private VehicleMapperImpl mapper;

    @Override
    public List<VehicleDTO> getAllVehicleData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VehicleDTO getVehicleObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public VehicleDTO insertNewVehicleObjectData(VehicleDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public VehicleDTO updateExistingVehicleObjectData(VehicleDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public VehicleDTO deleteVehicleObjectData(Integer id) {
        VehicleDTO deleted = getVehicleObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
