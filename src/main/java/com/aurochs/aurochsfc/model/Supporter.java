package com.aurochs.aurochsfc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Supporter")
@Table(name = "supporter")
public class Supporter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,
            updatable = false,
            name = "supporter_id")
    private Long id;
    private String name;
    private String email;
    private String streetAddress;
    private String city;
    private String phone;
    private String imageUrl;
    @OneToMany(
            mappedBy = "supporter",
            orphanRemoval = true,
            cascade = CascadeType.ALL
    )
    private List<Beer> beers = new ArrayList<>();

    @Override
    public String toString(){
        return "Supporter{" +
                "id=" + id +
                ", name ='" + name + '\'' +
                ", email='" + email + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", phone='" + phone + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}

