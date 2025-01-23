package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.CustomerDTO;

import java.util.List;

public interface CustomerServiceInterface {

    List<CustomerDTO> getAllCustomerData();
    CustomerDTO getCustomerObjectById(Integer id);
    CustomerDTO insertNewCustomerObjectData(CustomerDTO body);
    CustomerDTO updateExistingCustomerObjectData(CustomerDTO body);
    CustomerDTO deleteCustomerObjectData(Integer id);
}
