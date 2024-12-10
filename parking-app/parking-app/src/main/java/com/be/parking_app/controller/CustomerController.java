package com.be.parking_app.controller;

import com.be.parking_app.dto.CustomerDTO;
import com.be.parking_app.service.Impl.CustomerServiceImpl;
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
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerServiceImpl service;

    @GetMapping("/getAllCustomers")
    public List<CustomerDTO> getAllCustomers() {
        return service.getAllCustomerData();
    }
}
