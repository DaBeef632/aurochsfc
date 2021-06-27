package com.aurochs.aurochsfc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employee implements Serializable {
    static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @Column(name = "first_Name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email_id")
    private String emailId;

    public Employee(String firstName, String lastName, String email) {
    }
//    @OneToMany(
//            mappedBy = "employee",
//            orphanRemoval = true,
//            cascade = CascadeType.ALL
//    )
//    private List<Beer> beers = new ArrayList<>();
    @Override
    public String toString(){
        return "Employee{" +
                "id=" + id +
                ", firsName ='" + firstName + '\'' +
                ", lastName ='" + lastName + '\'' +
                ", emailId='" + emailId + '\'' +
                '}';
    }
}