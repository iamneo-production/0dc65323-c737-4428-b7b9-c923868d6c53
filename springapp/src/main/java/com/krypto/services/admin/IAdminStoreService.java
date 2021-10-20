package com.bookstore.services.admin;

import com.bookstore.entity.AdminModel;

public interface IAdminStoreService {
    AdminModel editAdmin(AdminModel data);
    AdminModel getProfile(String adminId);
}
