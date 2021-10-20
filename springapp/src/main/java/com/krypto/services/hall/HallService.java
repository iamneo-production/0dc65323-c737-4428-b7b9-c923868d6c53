package com.bookstore.services.hall;

import com.bookstore.dao.hall.HallStoreDAO;
import com.bookstore.entity.HallModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HallService implements IHallService{

    @Autowired
    private HallStoreDAO hallStoreDAO;

    @Override
    public boolean saveHall(HallModel data) {
        return hallStoreDAO.saveHall(data);
    }

    @Override
    public boolean editHall(HallModel data) {
        return hallStoreDAO.editHall(data);
    }

    @Override
    public boolean deleteHall(String hallId) {
        return hallStoreDAO.deleteHall(hallId);
    }

    @Override
    public List<HallModel> getHall(String Admin_Email_ID) {
        return hallStoreDAO.getHalls(Admin_Email_ID);
    }

    @Override
    public boolean bookHall(String Hall_Id) {
        return false;
    }
}
