package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.OffersDTO;

import java.util.List;

public interface OffersServiceInterface {

    List<OffersDTO> getAllOffersData();

    OffersDTO getOfferObjectById(Integer id);

    OffersDTO insertNewOfferObjectData(OffersDTO body);

    OffersDTO updateExistingOfferObjectData(OffersDTO body);

    OffersDTO deleteOfferObjectData(Integer id);
}
