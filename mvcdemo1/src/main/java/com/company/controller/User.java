package com.company.controller;

public class User {
    private String userName;

    // Getter and Setter
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "User [userName=" + userName + "]";
    }
}