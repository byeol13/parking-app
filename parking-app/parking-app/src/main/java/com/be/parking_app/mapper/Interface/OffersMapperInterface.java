package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.entity.OffersEntity;

public interface OffersMapperInterface {

    OffersDTO toDTO(OffersEntity entity);
    OffersEntity toEntity(OffersDTO dto);
}
