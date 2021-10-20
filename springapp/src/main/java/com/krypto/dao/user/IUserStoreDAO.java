package com.krypto.dao.user;

import com.krypto.entity.UserModel;

import java.util.List;

public interface IUserStoreDAO {
    List<UserModel> userBookings(String User_ID);
    boolean userProfileEdit(String User_ID);
    boolean userBookHall();
    List<UserModel> userGetBookings(String UserID);
}
