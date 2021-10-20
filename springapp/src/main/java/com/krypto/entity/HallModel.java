package com.krypto.entity;

import javax.persistence.*;
import java.io.Serializable;

@SuppressWarnings("ALL")
@Entity
@Table(name = "hall")
public class HallModel implements Serializable {
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

    @Column(name = "hall_id")
    public String hallID;

    @Column(name = "hall_no")
    private String hallNo;

    @Column(name = "admin_id")
    private String adminID;

    @Column(name = "status")
    private String status;

    @Column(name = "price")
    private String price;

    @Column(name = "type")
    private String type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHallID() {
        return hallID;
    }

    public void setHallID(String hallID) {
        this.hallID = hallID;
    }

    public String getHallNo() {
        return hallNo;
    }

    public void setHallNo(String hallNo) {
        this.hallNo = hallNo;
    }

    public String getAdminID() { return adminID; }

    public void setAdminID(String adminID) {
        this.adminID = adminID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "HallModel{" +
                "id=" + id +
                ", hallID='" + hallID + '\'' +
                ", hallNo='" + hallNo + '\'' +
                ", adminID='" + adminID + '\'' +
                ", status='" + status + '\'' +
                ", price='" + price + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
