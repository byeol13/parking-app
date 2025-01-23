package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.dto.ParkingOneTimeReservationDTO;
import com.be.parking_app.entity.OffersEntity;
import com.be.parking_app.entity.ParkingLotEntity;
import com.be.parking_app.entity.ParkingOneTimeReservationEntity;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Impl.ParkingOneTimeReservationMapperImpl;
import com.be.parking_app.repository.ParkingLotRepository;
import com.be.parking_app.repository.ParkingOneTimeReservationRepository;
import com.be.parking_app.repository.VehicleRepository;
import com.be.parking_app.service.Interface.ParkingOneTimeReservationServiceInterface;
import jakarta.persistence.EntityNotFoundException;
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

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ParkingLotRepository parkingLotRepository;

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
        VehicleEntity vehicleEntity = vehicleRepository.findById(body.getVehicleDTO().getVehicleId())
                .orElseThrow(() -> new EntityNotFoundException("Vehicle not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        ParkingOneTimeReservationEntity newOneTimeResEntity = new ParkingOneTimeReservationEntity();
        newOneTimeResEntity.setBasicParkingCost(body.getBasicParkingCost());
        newOneTimeResEntity.setOfferCode(body.getOfferCode());
        newOneTimeResEntity.setBookingForHr(body.getBookingForHr());
        newOneTimeResEntity.setNetCost(body.getNetCost());
        newOneTimeResEntity.setPayForMinHr(body.getPayForMinHr());
        newOneTimeResEntity.setStartTimestamp(body.getStartTimestamp());
        newOneTimeResEntity.setIsPaid(body.getIsPaid());
        newOneTimeResEntity.setVehicleEntity(vehicleEntity);
        newOneTimeResEntity.setParkingLotEntity(parkingLotEntity);

        ParkingOneTimeReservationEntity savedOneTimeRes = repository.save(newOneTimeResEntity);

        return mapper.toDTO(savedOneTimeRes);
    }

    @Override
    public ParkingOneTimeReservationDTO updateExistingParkingOneTimeReservationObjectData(ParkingOneTimeReservationDTO body) {
        ParkingOneTimeReservationEntity existingOneTimeResEntity = repository.findById(body.getOneTimeResId())
                .orElseThrow(() -> new EntityNotFoundException("Offer not found"));

        VehicleEntity vehicleEntity = vehicleRepository.findById(body.getVehicleDTO().getVehicleId())
                .orElseThrow(() -> new EntityNotFoundException("Vehicle not found"));

        ParkingLotEntity parkingLotEntity = parkingLotRepository.findById(body.getParkingLotDTO().getParkingLotId())
                .orElseThrow(() -> new EntityNotFoundException("Parking Lot not found"));

        existingOneTimeResEntity.setBasicParkingCost(body.getBasicParkingCost());
        existingOneTimeResEntity.setOfferCode(body.getOfferCode());
        existingOneTimeResEntity.setBookingForHr(body.getBookingForHr());
        existingOneTimeResEntity.setNetCost(body.getNetCost());
        existingOneTimeResEntity.setPayForMinHr(body.getPayForMinHr());
        existingOneTimeResEntity.setStartTimestamp(body.getStartTimestamp());
        existingOneTimeResEntity.setIsPaid(body.getIsPaid());
        existingOneTimeResEntity.setVehicleEntity(vehicleEntity);
        existingOneTimeResEntity.setParkingLotEntity(parkingLotEntity);

        ParkingOneTimeReservationEntity updatedOneTimeRes = repository.save(existingOneTimeResEntity);
        return mapper.toDTO(updatedOneTimeRes);
    }

    @Override
    public ParkingOneTimeReservationDTO deleteParkingOneTimeReservationObjectData(Integer id) {
        ParkingOneTimeReservationDTO deleted = getParkingOneTimeReservationObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
