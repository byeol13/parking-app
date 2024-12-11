package com.be.parking_app.controller;

import com.be.parking_app.dto.PaymentMethodDTO;
import com.be.parking_app.dto.VehicleDTO;
import com.be.parking_app.service.Impl.PaymentMethodServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/paymentMethod")
public class PaymentMethodController {

    @Autowired
    private PaymentMethodServiceImpl service;

    @GetMapping("/getALlPaymentMethods")
    private List<PaymentMethodDTO> getAllPaymentMethods() {
        return service.getAllPaymentMethodData();
    }

    @GetMapping("/getPaymentMethodById")
    public PaymentMethodDTO getPaymentMethodById(@Validated @RequestParam(name = "paymentMethodId") Integer id) {
        return service.getPaymentMethodObjectById(id);
    }
}
