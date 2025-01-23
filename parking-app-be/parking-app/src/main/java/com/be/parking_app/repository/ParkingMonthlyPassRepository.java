package com.be.parking_app.repository;

import com.be.parking_app.entity.ParkingMonthlyPassEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingMonthlyPassRepository extends JpaRepository<ParkingMonthlyPassEntity, Integer> {
}
