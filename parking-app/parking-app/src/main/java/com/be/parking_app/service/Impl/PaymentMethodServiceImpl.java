package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.PaymentMethodDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.entity.CustomerEntity;
import com.be.parking_app.entity.PaymentMethodEntity;
import com.be.parking_app.entity.VehicleEntity;
import com.be.parking_app.mapper.Impl.PaymentMethodMapperImpl;
import com.be.parking_app.repository.CustomerRepository;
import com.be.parking_app.repository.PaymentMethodRepository;
import com.be.parking_app.service.Interface.PaymentMethodServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PaymentMethodServiceImpl implements PaymentMethodServiceInterface {

    @Autowired
    private PaymentMethodRepository repository;

    @Autowired
    private PaymentMethodMapperImpl mapper;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<PaymentMethodDTO> getAllPaymentMethodData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PaymentMethodDTO getPaymentMethodObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public PaymentMethodDTO insertNewPaymentMethodObjectData(PaymentMethodDTO body) {
        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        PaymentMethodEntity newPaymentMethodEntity = new PaymentMethodEntity();
        newPaymentMethodEntity.setCardType(body.getCardType());
        newPaymentMethodEntity.setCardNumber(body.getCardNumber());
        newPaymentMethodEntity.setExpiryMonth(body.getExpiryMonth());
        newPaymentMethodEntity.setExpiryYear(body.getExpiryYear());
        newPaymentMethodEntity.setSecurityCode(body.getSecurityCode());
        newPaymentMethodEntity.setCustomerEntity(customerEntity);

        PaymentMethodEntity savedPaymentMethod = repository.save(newPaymentMethodEntity);

        return mapper.toDTO(savedPaymentMethod);
    }

    @Override
    public PaymentMethodDTO updateExistingPaymentMethodObjectData(PaymentMethodDTO body) {
        PaymentMethodEntity existingPaymentMethodEntity = repository.findById(body.getPaymentMethodId())
                .orElseThrow(() -> new EntityNotFoundException("Payment Method not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        existingPaymentMethodEntity.setCardType(body.getCardType());
        existingPaymentMethodEntity.setCardNumber(body.getCardNumber());
        existingPaymentMethodEntity.setExpiryMonth(body.getExpiryMonth());
        existingPaymentMethodEntity.setExpiryYear(body.getExpiryYear());
        existingPaymentMethodEntity.setSecurityCode(body.getSecurityCode());
        existingPaymentMethodEntity.setCustomerEntity(customerEntity);

        PaymentMethodEntity updatedPaymentMethod = repository.save(existingPaymentMethodEntity);
        return mapper.toDTO(updatedPaymentMethod);
    }

    @Override
    public PaymentMethodDTO deletePaymentMethodObjectData(Integer id) {
        PaymentMethodDTO deleted = getPaymentMethodObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
