package com.bookstore.repository;

import com.bookstore.entity.HallModel;
import com.bookstore.entity.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HallRepository extends CrudRepository<HallModel,Integer> {
    HallModel deleteByHallID(String hallId);
    int countByHallID(String HallId);
    List<HallModel> getAllByAdminID(String adminId);
}
