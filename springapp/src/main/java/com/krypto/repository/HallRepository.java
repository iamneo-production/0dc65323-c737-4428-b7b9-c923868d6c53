package com.krypto.repository;

import com.krypto.entity.HallModel;
import com.krypto.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HallRepository extends CrudRepository<HallModel, Integer> {
    HallModel deleteByHallID(String hallId);

    int countByHallID(String HallId);

    List<HallModel> getAllByAdminID(String adminId);
}
