package com.krypto.entity;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "login")
public class LoginModel implements Serializable {
    //    Steps to generate this dao file
//    Install intellij idea on your systems
//    Create a java class in entity folder as per name given in the document
//    Write all the Columns given
//    to generate all the getter and setters press Alt+Insert or Right click and select Generate Getter and Setter
//    Select all the fields and your work is done
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id")
//    private int id;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;
    @Id
    private Long id;

//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginModel{" +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getId() {
//        return id;
//    }
}
