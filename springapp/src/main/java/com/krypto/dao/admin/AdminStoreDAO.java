package com.krypto.dao.admin;

import com.krypto.entity.AdminModel;
import com.krypto.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class AdminStoreDAO implements IAdminStoreDAO {

    @Autowired
    private AdminRepository adminRepository;
    @Override
    public boolean editAdmin(AdminModel data) {
        return false;
    }

    @Override
    public AdminModel getProfile(String Admin_Email_ID) {
        return adminRepository.getByEmail(Admin_Email_ID);
    }
}
