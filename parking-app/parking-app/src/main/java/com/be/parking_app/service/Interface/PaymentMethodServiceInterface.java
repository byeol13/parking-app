package com.be.parking_app.service.Interface;

import com.be.parking_app.dto.PaymentMethodDTO;

import java.util.List;

public interface PaymentMethodServiceInterface {
    List<PaymentMethodDTO> getAllPaymentMethodData();

    PaymentMethodDTO getPaymentMethodObjectById(Integer id);

    PaymentMethodDTO insertNewPaymentMethodObjectData(PaymentMethodDTO body);

    PaymentMethodDTO updateExistingPaymentMethodObjectData(PaymentMethodDTO body);

    PaymentMethodDTO deletePaymentMethodObjectData(Integer id);
}
