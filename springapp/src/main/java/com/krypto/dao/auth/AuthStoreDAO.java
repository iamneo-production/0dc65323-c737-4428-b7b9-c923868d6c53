package com.krypto.dao.auth;

import com.krypto.repository.AuthRepository;
import com.krypto.entity.LoginModel;
import com.krypto.entity.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Objects;

@Transactional
@Repository
public class AuthStoreDAO implements IAuthStoreDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public AuthRepository authRepository;
    @SuppressWarnings("unchecked")
    @Override
    public UserModel checkIfEntryExists(LoginModel data, String type) {
        return authRepository.findByEmailAndPasswordAndUserRole(data.email,data.password,type);
    }

    @Override
    public UserModel saveEntry(UserModel entry) {
        return authRepository.save(entry);
    }
}
