package com.be.parking_app.service.Impl;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.mapper.Impl.OffersMapperImpl;
import com.be.parking_app.repository.OffersRepository;
import com.be.parking_app.service.Interface.OffersServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OffersServiceImpl implements OffersServiceInterface {

    @Autowired
    private OffersRepository repository;

    @Autowired
    private OffersMapperImpl mapper;

    @Override
    public List<OffersDTO> getAllOffersData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OffersDTO getOfferObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public OffersDTO insertNewOfferObjectData(OffersDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public OffersDTO updateExistingOfferObjectData(OffersDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public OffersDTO deleteOfferObjectData(Integer id) {
        OffersDTO deleted = getOfferObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
