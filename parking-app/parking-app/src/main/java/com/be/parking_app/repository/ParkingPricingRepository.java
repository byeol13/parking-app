package com.be.parking_app.repository;

import com.be.parking_app.entity.ParkingPricingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingPricingRepository extends JpaRepository<ParkingPricingEntity, Integer> {
}
