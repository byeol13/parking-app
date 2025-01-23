package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.PaymentMethodDTO;
import com.be.parking_app.entity.PaymentMethodEntity;
import com.be.parking_app.mapper.Interface.CustomerMapperInterface;
import com.be.parking_app.mapper.Interface.PaymentMethodMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PaymentMethodMapperImpl implements PaymentMethodMapperInterface {

    @Autowired
    private CustomerMapperInterface customerMapper;

    @Override
    public PaymentMethodDTO toDTO(PaymentMethodEntity entity) {
        if (entity == null) return null;

        PaymentMethodDTO dto = new PaymentMethodDTO();
        dto.setPaymentMethodId(entity.getPaymentMethodId());
        dto.setCardType(entity.getCardType());
        dto.setCardNumber(entity.getCardNumber());
        dto.setExpiryMonth(entity.getExpiryMonth());
        dto.setExpiryYear(entity.getExpiryYear());
        dto.setSecurityCode(entity.getSecurityCode());
        dto.setCustomerDTO(customerMapper.toDTO(entity.getCustomerEntity()));

        return dto;
    }

    @Override
    public PaymentMethodEntity toEntity(PaymentMethodDTO dto) {
        if (dto == null) return null;

        PaymentMethodEntity entity = new PaymentMethodEntity();
        entity.setPaymentMethodId(dto.getPaymentMethodId());
        entity.setCardType(dto.getCardType());
        entity.setCardNumber(dto.getCardNumber());
        entity.setExpiryMonth(dto.getExpiryMonth());
        entity.setExpiryYear(dto.getExpiryYear());
        entity.setSecurityCode(dto.getSecurityCode());
        entity.setCustomerEntity(customerMapper.toEntity(dto.getCustomerDTO()));

        return entity;
    }
}
