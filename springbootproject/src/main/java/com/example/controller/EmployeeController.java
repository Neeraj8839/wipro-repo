package com.example.controller;

import com.example.bean.Employee;
import com.example.repo.EmployeeRepo;
import com.example.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("empapi")
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/add")
//    public String addEmployee(@RequestBody Employee employee) {
//
//             employeeService.createEmployee(employee);
//            return "Employee added successfully";
//
//
//    }

    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {

        Employee emp = employeeService.createEmployee(employee);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @GetMapping("/viewall")
    public ResponseEntity<List<Employee>> viewAllEmployees() {

        List <Employee> emplist =  employeeService.getAllEmployees();
        return new ResponseEntity<>(emplist, HttpStatus.OK);

    }

    @GetMapping("/view/{id}")
    public ResponseEntity<Employee> viewEmployee(@PathVariable Integer id) {

        Optional<Employee> emp = employeeService.getEmployeeById(id);

        if(emp.isPresent()) {
            return new ResponseEntity<>(emp.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>("The employee is deleted successfully",HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
        Employee emp =  employeeService.updateEmployee(id, employee);

        return new ResponseEntity<>(emp.toString(), HttpStatus.OK);

        //List <Employee> updatedList = employeeService.getAllEmployees();
        // return new ResponseEntity<>(updatedList.toString(), HttpStatus.OK);  //show the updated list of employees after update
        // return new ResponseEntity<>("The id is updated successfully",HttpStatus.OK);  //show only message that list updated successfully
    }
}