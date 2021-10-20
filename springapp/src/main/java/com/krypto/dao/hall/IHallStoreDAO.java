package com.krypto.dao.hall;

import com.krypto.entity.HallModel;

import java.util.List;

public interface IHallStoreDAO {
    boolean saveHall(HallModel data);
    boolean editHall(HallModel data);
    boolean deleteHall(String Hall_ID);
    List<HallModel> getHalls(String Admin_Email_ID);
    boolean bookHall(String Hall_ID);
}
