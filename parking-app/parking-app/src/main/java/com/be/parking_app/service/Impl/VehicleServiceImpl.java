package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.entity.CustomerEntity;
import com.be.parking_app.entity.OffersEntity;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Impl.VehicleMapperImpl;
import com.be.parking_app.repository.CustomerRepository;
import com.be.parking_app.repository.VehicleRepository;
import com.be.parking_app.service.Interface.VehicleServiceInterface;
import jakarta.persistence.EntityNotFoundException;
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

    @Autowired
    private CustomerRepository customerRepository;

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
        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        VehicleEntity newVehicleEntity = new VehicleEntity();
        newVehicleEntity.setVehicleNumber(body.getVehicleNumber());
        newVehicleEntity.setCustomerEntity(customerEntity);

        VehicleEntity savedVehicle = repository.save(newVehicleEntity);

        return mapper.toDTO(savedVehicle);
    }

    @Override
    public VehicleDTO updateExistingVehicleObjectData(VehicleDTO body) {
        VehicleEntity existingVehicleEntity = repository.findById(body.getVehicleId())
                .orElseThrow(() -> new EntityNotFoundException("Vehicle not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        existingVehicleEntity.setVehicleNumber(body.getVehicleNumber());
        existingVehicleEntity.setCustomerEntity(customerEntity);

        VehicleEntity updatedVehicle = repository.save(existingVehicleEntity);
        return mapper.toDTO(updatedVehicle);
    }

    @Override
    public VehicleDTO deleteVehicleObjectData(Integer id) {
        VehicleDTO deleted = getVehicleObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
