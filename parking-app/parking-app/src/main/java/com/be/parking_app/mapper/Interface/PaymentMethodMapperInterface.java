package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.PaymentMethodDTO;
import com.be.parking_app.entity.PaymentMethodEntity;

public interface PaymentMethodMapperInterface {
    PaymentMethodDTO toDTO(PaymentMethodEntity entity);
    PaymentMethodEntity toEntity(PaymentMethodDTO dto);
}
