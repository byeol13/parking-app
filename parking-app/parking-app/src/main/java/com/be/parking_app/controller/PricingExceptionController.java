package com.be.parking_app.controller;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.PricingExceptionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/pricingException")
public class PricingExceptionController {

    @Autowired
    private PricingExceptionServiceImpl service;

    @GetMapping("/getAllPricingExceptions")
    private List<PricingExceptionDTO> getAllPricingException() {
        return service.getAllPricingExceptionData();
    }
}
