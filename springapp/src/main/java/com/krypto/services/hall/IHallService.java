package com.bookstore.services.hall;

import com.bookstore.entity.HallModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface IHallService {
    boolean saveHall(HallModel data);
    boolean editHall(HallModel data);
    boolean deleteHall(String hallId);
    List<HallModel> getHall(String Admin_Email_ID);
    boolean bookHall(String Hall_Id);
}
