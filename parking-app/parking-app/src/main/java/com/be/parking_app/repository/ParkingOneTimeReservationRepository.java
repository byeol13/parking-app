package com.be.parking_app.repository;

import com.be.parking_app.entity.ParkingOneTimeReservationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingOneTimeReservationRepository extends JpaRepository<ParkingOneTimeReservationEntity, Integer> {
}
