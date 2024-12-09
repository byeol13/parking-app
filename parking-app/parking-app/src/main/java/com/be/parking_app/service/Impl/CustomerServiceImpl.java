package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.CustomerDTO;
import com.be.parking_app.mapper.Impl.CustomerMapperImpl;
import com.be.parking_app.repository.CustomerRepository;
import com.be.parking_app.service.Interface.CustomerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomerServiceImpl implements CustomerServiceInterface {

    @Autowired
    private CustomerRepository repository;

    @Autowired
    private CustomerMapperImpl mapper;

    @Override
    public List<CustomerDTO> getAllCustomerData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDTO getCustomerObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CustomerDTO insertNewCustomerObjectData(CustomerDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public CustomerDTO updateExistingCustomerObjectData(CustomerDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public CustomerDTO deleteCustomerObjectData(Integer id) {
        CustomerDTO deleted = getCustomerObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
