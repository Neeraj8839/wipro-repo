package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    private Integer id;

    private Integer age;

    private String aadharNo;

    private String panNo;

    public User() {
    }

    public User(Integer id, Integer age, String aadharNo, String panNo) {
        this.id = id;
        this.age = age;
        this.aadharNo = aadharNo;
        this.panNo = panNo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getPanNo() {
        return panNo;
    }

    public void setPanNo(String panNo) {
        this.panNo = panNo;
    }
}