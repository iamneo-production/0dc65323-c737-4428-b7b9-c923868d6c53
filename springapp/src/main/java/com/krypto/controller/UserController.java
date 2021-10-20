package com.bookstore.controller;

//import com.hackathon.kryptoparty.entity.HallModel;
//import com.hackathon.kryptoparty.entity.LoginModel;
//import com.hackathon.kryptoparty.objectDataTypes.AuthLogin;
//import com.hackathon.kryptoparty.entity.UserModel;
import com.bookstore.entity.HallModel;
import com.bookstore.entity.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @PostMapping("/userBookings")
    public ResponseEntity<UserModel> userBookings(String User_ID) {
        UserModel users = new UserModel();
        return new ResponseEntity<UserModel>(users,HttpStatus.CREATED);
    }

    @PostMapping("/userProfileEdit")
    public boolean userProfileEdit(String User_ID){
        return false;
    }

    @PostMapping("/userBookHall")
    public boolean userBookHall(){
        return true;
    }

    @GetMapping("/userGetBookings")
    public List<UserModel> userGetBookings(String UserID){
        List<UserModel> users = (List<UserModel>) new UserModel();
        return (List<UserModel>) new ResponseEntity<List<UserModel>>(users,HttpStatus.CREATED);
    }

}