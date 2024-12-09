package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.ParkingOneTimeReservationDTO;

import java.util.List;

public interface ParkingOneTimeReservationServiceInterface {

    List<ParkingOneTimeReservationDTO> getAllParkingOneTimeReservationData();

    ParkingOneTimeReservationDTO getParkingOneTimeReservationObjectById(Integer id);

    ParkingOneTimeReservationDTO insertNewParkingOneTimeReservationObjectData(ParkingOneTimeReservationDTO body);

    ParkingOneTimeReservationDTO updateExistingParkingOneTimeReservationObjectData(ParkingOneTimeReservationDTO body);

    ParkingOneTimeReservationDTO deleteParkingOneTimeReservationObjectData(Integer id);
}
