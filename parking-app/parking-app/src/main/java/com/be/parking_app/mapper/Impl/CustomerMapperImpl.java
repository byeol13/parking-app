package com.be.parking_app.mapper.Impl;

import com.be.parking_app.dto.CustomerDTO;
import com.be.parking_app.entity.CustomerEntity;
import com.be.parking_app.mapper.Interface.CustomerMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class CustomerMapperImpl implements CustomerMapperInterface {

    @Override
    public CustomerDTO toDTO(CustomerEntity entity) {
        if (entity == null) return null;

        CustomerDTO dto = new CustomerDTO();

        dto.setCustomerId(entity.getCustomerId());
        dto.setRegistrationDate(entity.getRegistrationDate());
        dto.setIsRegularCusto(entity.getIsRegularCusto());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setContactNumber(entity.getContactNumber());
        dto.setBillingAddress(entity.getBillingAddress());

        return dto;
    }

    @Override
    public CustomerEntity toEntity(CustomerDTO dto) {
        if (dto == null) return null;

        CustomerEntity entity = new CustomerEntity();

        entity.setCustomerId(dto.getCustomerId());
        entity.setRegistrationDate(dto.getRegistrationDate());
        entity.setIsRegularCusto(dto.getIsRegularCusto());
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setContactNumber(dto.getContactNumber());
        entity.setBillingAddress(dto.getBillingAddress());

        return entity;
    }
}
