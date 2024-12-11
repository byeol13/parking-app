package com.be.parking_app.controller;

import com.be.parking_app.dto.PaymentMethodDTO;
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

    @PostMapping("/newPaymentMethod")
    public PaymentMethodDTO createPaymentMethod(@Validated @RequestBody PaymentMethodDTO body) {
        return service.insertNewPaymentMethodObjectData(body);
    }

    @PutMapping("/updatePaymentMethod")
    public PaymentMethodDTO updatePaymentMethod(@Validated @RequestBody PaymentMethodDTO body) {
        return service.updateExistingPaymentMethodObjectData(body);
    }

    @DeleteMapping("/deletePaymentMethod/{id}")
    public PaymentMethodDTO deletePaymentMethod(@Validated @PathVariable("id") Integer id) {
        return service.deletePaymentMethodObjectData(id);
    }
}
