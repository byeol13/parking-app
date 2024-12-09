package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.PaymentMethodDTO;
import com.be.parking_app.mapper.Impl.PaymentMethodMapperImpl;
import com.be.parking_app.repository.PaymentMethodRepository;
import com.be.parking_app.service.Interface.PaymentMethodServiceInterface;
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
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public PaymentMethodDTO updateExistingPaymentMethodObjectData(PaymentMethodDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public PaymentMethodDTO deletePaymentMethodObjectData(Integer id) {
        PaymentMethodDTO deleted = getPaymentMethodObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
