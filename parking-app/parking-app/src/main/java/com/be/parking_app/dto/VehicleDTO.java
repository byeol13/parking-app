package com.be.parking_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class VehicleDTO {
    private Integer vehicleId;
    private String vehicleNumber;
    private CustomerDTO customerDTO;
}
