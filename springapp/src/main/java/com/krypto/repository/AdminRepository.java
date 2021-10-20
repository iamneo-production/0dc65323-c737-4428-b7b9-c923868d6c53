package com.bookstore.repository;

import com.bookstore.entity.AdminModel;
import com.bookstore.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<UserModel,Integer> {
    AdminModel getByEmail(String emailId);
}
