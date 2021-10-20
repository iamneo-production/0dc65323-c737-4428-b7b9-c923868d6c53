package com.krypto.dao.auth;

import com.krypto.entity.LoginModel;
import com.krypto.entity.UserModel;

public interface IAuthStoreDAO {
    UserModel checkIfEntryExists(LoginModel data,String type);
    UserModel saveEntry(UserModel entry);
}
