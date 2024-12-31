package com.example.demo.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class employeeDto {

    private int id;
    private String firstname;
    private String lastname;
    private String password;
    private LocalDate dob;
    private Long phone;
    private String email;
    private int experience;
    private String domain;
}
