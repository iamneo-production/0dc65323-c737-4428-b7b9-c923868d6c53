package com.bookstore.services.user;

import com.bookstore.entity.HallModel;
import com.bookstore.entity.UserModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{
    @Override
    public List<UserModel> getBookings(String User_Id) {
        return null;
    }

    @Override
    public UserModel editUserDetail(String User_Id) {
        return null;
    }

    @Override
    public boolean UserBookHall() {
        return false;
    }

    @Override
    public List<HallModel> userGetBookings(String User_Id) {
        return null;
    }
}
