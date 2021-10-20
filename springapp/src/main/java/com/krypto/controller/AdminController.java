package com.krypto.controller;

import com.krypto.entity.AdminModel;
//import com.hackathon.kryptoparty.entity.LoginModel;
//import com.hackathon.kryptoparty.objectDataTypes.AuthLogin;
//import com.hackathon.kryptoparty.entity.UserModel;
import com.krypto.services.admin.AdminStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Controller
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminStoreService adminStoreService;

    @PostMapping("/editAdmin")
    public boolean editAdmin(@RequestBody AdminModel data) {
        return false;
    }

    @GetMapping("/getProfile")
    public ResponseEntity<AdminModel> getProfile(@RequestBody String Admin_Email_ID) {
        return new ResponseEntity<AdminModel>(adminStoreService.getProfile(Admin_Email_ID), HttpStatus.CREATED);
    }
}