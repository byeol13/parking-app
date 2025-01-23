package com.be.parking_app.repository;

import com.be.parking_app.entity.OffersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffersRepository extends JpaRepository<OffersEntity, Integer> {
}
