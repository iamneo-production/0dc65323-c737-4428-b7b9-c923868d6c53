package com.krypto.repository;

import com.krypto.entity.HallModel;
import com.krypto.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserModel, Integer> {
    List<UserModel> getAllByuserID(String userId);
}
