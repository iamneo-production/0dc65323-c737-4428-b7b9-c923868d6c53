
package com.krypto.dao.admin;

import com.krypto.entity.AdminModel;

import java.util.List;

public interface IAdminStoreDAO {
    boolean editAdmin(AdminModel data);
    AdminModel getProfile(String Admin_Email_ID);
}
