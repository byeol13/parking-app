package com.be.parking_app.repository;

import com.be.parking_app.entity.PricingExceptionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PricingExceptionRepository extends JpaRepository<PricingExceptionEntity, Integer> {
}
