package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.CustomerDTO;
import com.be.parking_app.entity.CustomerEntity;

public interface CustomerMapperInterface {

    CustomerDTO toDTO(CustomerEntity entity);
    CustomerEntity toEntity(CustomerDTO dto);
}
