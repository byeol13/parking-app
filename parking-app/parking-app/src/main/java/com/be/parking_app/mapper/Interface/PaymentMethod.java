package com.be.parking_app.mapper.Interface;

import com.be.parking_app.dto.PaymentMethodDTO;

import java.util.List;

public interface PaymentMethod {

    List<PaymentMethodDTO> getAllPaymentMethodData();

    PaymentMethodDTO getPaymentMethodObjectById(Integer id);

    PaymentMethodDTO insertNewPaymentMethodObjectData(PaymentMethodDTO body);

    PaymentMethodDTO updateExistingPaymentMethodObjectData(PaymentMethodDTO body);

    PaymentMethodDTO deletePaymentMethodObjectData(Integer id);
}
