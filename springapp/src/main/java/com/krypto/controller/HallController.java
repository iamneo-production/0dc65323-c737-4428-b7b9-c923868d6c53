package com.bookstore.controller;

//import com.hackathon.kryptoparty.entity.HallModel;
//import com.hackathon.kryptoparty.entity.LoginModel;
//import com.hackathon.kryptoparty.objectDataTypes.AuthLogin;
//import com.hackathon.kryptoparty.entity.UserModel;
import com.bookstore.entity.HallModel;
import com.bookstore.services.hall.HallService;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/hall")
public class HallController {

    @Autowired
    private HallService hallService;

    @PostMapping("/saveHall")
    public ResponseEntity<Boolean> saveHall(@RequestBody HallModel data) {
        HallModel users = new HallModel();
        return new ResponseEntity<Boolean>(hallService.saveHall(data),HttpStatus.CREATED);
    }

    @PostMapping("/editHall")
    public boolean editHall(@RequestBody HallModel data){
        return false;
    }

    @DeleteMapping("/deleteHall")
    public ResponseEntity<Boolean> deleteHall(@RequestBody String Hall_ID){
        return new ResponseEntity<Boolean>(hallService.deleteHall(Hall_ID),HttpStatus.OK);
    }

    @GetMapping("/getHalls")
    public ResponseEntity<List<HallModel>> getHalls(@RequestBody String Admin_Email_ID){
        return new ResponseEntity<List<HallModel>>(hallService.getHall(Admin_Email_ID),HttpStatus.CREATED);
    }

    @PostMapping("/bookHall")
    public boolean bookHall(@RequestBody String Hall_ID){
        return false;
    }
}