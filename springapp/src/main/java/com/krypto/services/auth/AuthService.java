package com.bookstore.services.auth;

import com.bookstore.dao.auth.IAuthStoreDAO;
import com.bookstore.entity.LoginModel;
import com.bookstore.entity.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService {

    @Autowired
    private IAuthStoreDAO dao;

    @Override
    public boolean checkIfEntityExists(LoginModel data, String type) {
        UserModel result = dao.checkIfEntryExists(data,type);
        return result == null ? false : true;
    }

    @Override
    public UserModel saveEntity(UserModel data) {
        return dao.saveEntry(data);
    }
}
