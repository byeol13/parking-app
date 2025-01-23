package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.entity.PricingExceptionEntity;

public interface PricingExceptionMapperInterface {
    PricingExceptionDTO toDTO(PricingExceptionEntity entity);
    PricingExceptionEntity toEntity(PricingExceptionDTO dto);
}
