package com.bookstore.services.admin;

import com.bookstore.dao.admin.AdminStoreDAO;
import com.bookstore.entity.AdminModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminStoreService implements IAdminStoreService{

    @Autowired
    private AdminStoreDAO adminStoreDAO;

    @Override
    public AdminModel editAdmin(AdminModel data) {
        return null;
    }

    @Override
    public AdminModel getProfile(String adminId) {
        return adminStoreDAO.getProfile(adminId);
    }
}

