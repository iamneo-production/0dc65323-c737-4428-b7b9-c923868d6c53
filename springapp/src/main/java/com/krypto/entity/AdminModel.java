package com.krypto.entity;

import javax.persistence.*;
import java.io.Serializable;

@SuppressWarnings("ALL")
@Entity
@Table(name = "admin")
public class AdminModel implements Serializable {
    //    Steps to generate this dao file
//    Install intellij idea on your systems
//    Create a java class in entity folder as per name given in the document
//    Write all the Columns given
//    to generate all the getter and setters press Alt+Insert or Right click and select Generate Getter and Setter
//    Select all the fields and your work is done
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "seller_name")
    private String sellerName;

    @Column(name = "user_role")
    private String userRole;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_image_url")
    private String companyImageURL;

    @Column(name = "company_address")
    private String companyAddress;

    @Column(name = "earnings")
    private int earnings;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyImageURL() {
        return companyImageURL;
    }

    public void setCompanyImageURLN(String companyImageURL) {
        this.companyImageURL = companyImageURL;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public int getAge() {
        return earnings;
    }

    public void setAge(int earnings) {
        this.earnings = earnings;
    }


    @Override
    public String toString() {
        return "AdminModel{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", sellerName='" + sellerName + '\'' +
                ", userRole='" + userRole + '\'' +
                ", companyName='" + companyName + '\'' +
                ", companyImageURL='" + companyImageURL + '\'' +
                ", companyAddress='" + companyAddress + '\'' +
                ", earnings=" + earnings +
                '}';
    }
}
