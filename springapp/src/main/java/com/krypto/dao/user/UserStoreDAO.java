package com.krypto.dao.user;

import com.krypto.entity.HallModel;
import com.krypto.entity.UserModel;
import com.krypto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserStoreDAO implements IUserStoreDAO{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserModel> userBookings(String User_ID) {
        return userRepository.getAllByuserID(User_ID);
    }

    @Override
    public boolean userProfileEdit(String User_ID) {
        return false;
    }

    @Override
    public boolean userBookHall() {
        return true;
    }

    @Override
    public List<UserModel> userGetBookings(String UserID) {
        return userRepository.getAllByuserID(UserID);
    }
}
