package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.PricingExceptionDTO;

import java.util.List;

public interface PricingExceptionServiceInterface {

    List<PricingExceptionDTO> getAllPricingExceptionData();

    PricingExceptionDTO getPricingExceptionObjectById(Integer id);

    PricingExceptionDTO insertNewPricingExceptionObjectData(PricingExceptionDTO body);

    PricingExceptionDTO updateExistingPricingExceptionObjectData(PricingExceptionDTO body);

    PricingExceptionDTO deletePricingExceptionObjectData(Integer id);
}
