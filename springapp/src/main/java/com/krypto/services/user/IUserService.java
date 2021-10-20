package com.bookstore.services.user;

import com.bookstore.entity.HallModel;
import com.bookstore.entity.UserModel;

import java.util.List;

public interface IUserService {
    List<UserModel> getBookings(String User_Id);
    UserModel editUserDetail(String User_Id);
    boolean UserBookHall();
    List<HallModel> userGetBookings(String User_Id);
}
