package com.be.parking_app.controller;

import com.be.parking_app.dto.OffersDTO;
import com.be.parking_app.service.Impl.OffersServiceImpl;
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
@RequestMapping("/offers")
public class OffersController {

    @Autowired
    private OffersServiceImpl service;

    @GetMapping("/getAllOffers")
    private List<OffersDTO> getAllOffers() {
        return service.getAllOffersData();
    }
}
