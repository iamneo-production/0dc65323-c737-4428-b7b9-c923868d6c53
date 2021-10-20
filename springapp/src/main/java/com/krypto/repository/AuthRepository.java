package com.krypto.repository;

import com.krypto.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

public interface AuthRepository extends CrudRepository<UserModel, Integer> {
    UserModel findByEmailAndPasswordAndUserRole(String email, String password, String userRole);
}
