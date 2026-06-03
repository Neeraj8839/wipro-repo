package com.wipro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class userDAOImpl implements userDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void saveUser(UserModel user) {

        String sql =
        "INSERT INTO users(id, name, email) VALUES(?,?,?)";

        jdbcTemplate.update(
                sql,
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    @Override
    public java.util.List<UserModel> getUser() {
        return null;
    }
}