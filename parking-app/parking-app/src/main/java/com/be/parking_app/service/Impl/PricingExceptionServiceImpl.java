package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.mapper.Impl.PricingExceptionMapperImpl;
import com.be.parking_app.repository.PricingExceptionRepository;
import com.be.parking_app.service.Interface.PricingExceptionServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PricingExceptionServiceImpl implements PricingExceptionServiceInterface {

    @Autowired
    private PricingExceptionRepository repository;

    @Autowired
    private PricingExceptionMapperImpl mapper;

    @Override
    public List<PricingExceptionDTO> getAllPricingExceptionData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PricingExceptionDTO getPricingExceptionObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public PricingExceptionDTO insertNewPricingExceptionObjectData(PricingExceptionDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public PricingExceptionDTO updateExistingPricingExceptionObjectData(PricingExceptionDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public PricingExceptionDTO deletePricingExceptionObjectData(Integer id) {
        PricingExceptionDTO deleted = getPricingExceptionObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
