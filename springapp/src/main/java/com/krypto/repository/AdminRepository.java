package com.krypto.repository;

import com.krypto.entity.AdminModel;
import com.krypto.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<UserModel, Integer> {
    AdminModel getByEmail(String emailId);
}
