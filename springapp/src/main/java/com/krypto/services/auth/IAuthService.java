package com.bookstore.services.auth;

import com.bookstore.entity.LoginModel;
import com.bookstore.entity.UserModel;
import org.springframework.stereotype.Component;

@Component
public interface IAuthService {
    boolean checkIfEntityExists(LoginModel data, String type);
    UserModel saveEntity(UserModel data);
}
