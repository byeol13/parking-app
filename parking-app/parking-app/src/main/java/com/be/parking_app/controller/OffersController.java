package com.be.parking_app.controller;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.service.Impl.OffersServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/offers")
public class OffersController {

    @Autowired
    private OffersServiceImpl service;

    @GetMapping("/getAllOffers")
    private List<OffersDTO> getAllOffers() {
        return service.getAllOffersData();
    }

    @GetMapping("/getOfferById")
    public OffersDTO getOfferById(@Validated @RequestParam(name = "offerId") Integer id) {
        return service.getOfferObjectById(id);
    }

    @PostMapping("/newOffer")
    public OffersDTO createOffer(@Validated @RequestBody OffersDTO body) {
        return service.insertNewOfferObjectData(body);
    }
}
