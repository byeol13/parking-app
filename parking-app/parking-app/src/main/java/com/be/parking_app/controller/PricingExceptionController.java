package com.be.parking_app.controller;

import com.be.parking_app.dto.PricingExceptionDTO;
import com.be.parking_app.service.Impl.PricingExceptionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getPricingExceptionById")
    public PricingExceptionDTO getPricingExceptionById(@Validated @RequestParam(name = "pricingExceptionId") Integer id) {
        return service.getPricingExceptionObjectById(id);
    }

    @PostMapping("/newPricingException")
    public PricingExceptionDTO createPricingException(@Validated @RequestBody PricingExceptionDTO body) {
        return service.insertNewPricingExceptionObjectData(body);
    }

    @PutMapping("/updatePricingException")
    public PricingExceptionDTO updatePricingException(@Validated @RequestBody PricingExceptionDTO   body) {
        return service.updateExistingPricingExceptionObjectData(body);
    }

    @DeleteMapping("/deletePricingException/{id}")
    public PricingExceptionDTO deletePricingException(@Validated @PathVariable("id") Integer id) {
        return service.deletePricingExceptionObjectData(id);
    }
}
