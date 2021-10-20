package com.krypto.controller;

import com.krypto.entity.LoginModel;
import com.krypto.entity.UserModel;
import com.krypto.services.auth.IAuthService;
//import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("auth")
public class AuthController {
    @Autowired
    private IAuthService authService;

    @GetMapping("isUserPresent")
    public ResponseEntity<Boolean> isUserPresent(@RequestBody LoginModel data) {
        return new ResponseEntity<Boolean>(authService.checkIfEntityExists(data, "user"), HttpStatus.OK);
    }

    @GetMapping("isAdminPresent")
    public ResponseEntity<Boolean> isAdminPresent(@RequestBody LoginModel data) {
        return new ResponseEntity<Boolean>(authService.checkIfEntityExists(data, "admin"), HttpStatus.OK);
    }

    @PostMapping("saveUser")
    public ResponseEntity<UserModel> saveUser(@RequestBody UserModel data) {
        UserModel result = authService.saveEntity(data);
        return new ResponseEntity<UserModel>(result, HttpStatus.CREATED);
    }

    @PostMapping("saveAdmin")
    public ResponseEntity<UserModel> saveAdmin(@RequestBody UserModel data) {
        UserModel result = authService.saveEntity(data);
        return new ResponseEntity<UserModel>(result, HttpStatus.CREATED);
    }

}
