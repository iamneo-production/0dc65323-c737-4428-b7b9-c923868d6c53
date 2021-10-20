package com.bookstore.repository;

import com.bookstore.entity.HallModel;
import com.bookstore.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserModel,Integer> {
    List<UserModel> getAllByuserID(String userId);
}
