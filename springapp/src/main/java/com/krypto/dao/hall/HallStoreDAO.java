package com.krypto.dao.hall;

import com.krypto.entity.HallModel;
import com.krypto.repository.AuthRepository;
import com.krypto.repository.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Objects;

@Transactional
@Repository
public class HallStoreDAO implements IHallStoreDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public HallRepository hallRepository;

    @Override
    public boolean saveHall(HallModel data) {
        HallModel hallModel = hallRepository.save(data);
        int count = hallRepository.countByHallID(data.hallID);
        return count ==1 ? true: false;
    }

    @Override
    public boolean editHall(HallModel data) {
        return true;
    }

    @Override
    public boolean deleteHall(String Hall_ID) {
        hallRepository.deleteByHallID(Hall_ID);
        int count = hallRepository.countByHallID(Hall_ID);
        return count == 0 ? true: false;
    }

    @Override
    public List<HallModel> getHalls(String Admin_Email_ID) {
        return hallRepository.getAllByAdminID(Admin_Email_ID);
    }

    @Override
    public boolean bookHall(String Hall_ID) {
        return false;
    }

}
