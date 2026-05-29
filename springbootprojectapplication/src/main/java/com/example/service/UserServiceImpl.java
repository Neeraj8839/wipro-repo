package com.example.service;

import com.example.bean.User;
import com.example.exception.AgeNotFoundException;
import com.example.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    public User addUser(User user) {

        if(user.getAge() < 18) {

            throw new AgeNotFoundException(
                    "Age should be greater than 18");
        }

        return userRepo.save(user);
    }
}