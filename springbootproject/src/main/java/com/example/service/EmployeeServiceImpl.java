package com.example.service;

import com.example.bean.Employee;
import com.example.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public Employee updateEmployee(Integer id, Employee employee) {
        Employee employee1 = null;
        Optional<Employee> empopt1 = employeeRepo.findById(id);
        if(empopt1.isPresent()) {
            employee1 = employeeRepo.save(employee);
        }
        return employee1;
    }

    @Override
    public void deleteEmployee(Integer id) {
        Optional <Employee> e = employeeRepo.findById(id);
        e.ifPresent(emp -> employeeRepo.delete(emp));
    }

    @Override
    public Optional<Employee> getEmployeeById(Integer id) {
        return employeeRepo.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }
}