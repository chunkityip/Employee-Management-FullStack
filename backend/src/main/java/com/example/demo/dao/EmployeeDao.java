package com.example.demo.dao;

import com.example.demo.dto.EmployeeDto;

import java.util.List;

public interface EmployeeDao {

    boolean existsByEmail(String email);

    List<EmployeeDto> findByFirstnameStartingWith(String firstname);

    List<EmployeeDto> findByExperience(int experience);

    EmployeeDto findByEmail(String username);

    List<EmployeeDto > getByEmail(String email);
}
