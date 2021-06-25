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
@Entity(name = "Supporter")
@Table(name = "supporter")
public class Supporter implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,
            updatable = false,
            name = "supporter_id")
    private Long id;

    @Column(name = "first_name",
    nullable = false)
    private String firstName;
    @Column(name = "last_name",
    nullable = false)
    private String lastName;
    @Column(name = "email",
    nullable = false)
    private String email;
    @OneToMany(
            mappedBy = "employee",
            orphanRemoval = true,
            cascade = CascadeType.ALL
    )
    private List<Beer> beers = new ArrayList<>();


//    @ManyToOne
//    @JoinColumn(name = "checkin_checkin_id",
//                referencedColumnName = "checkin_id",
//                foreignKey = @ForeignKey(
//                        name = "checkin_id_fk"
//    )
//    )
//    private CheckIn checkin;

    @Override
    public String toString(){
        return "Supporter{" +
                "id=" + id +
                ", firstName ='" + firstName + '\'' +
                ", lastName ='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

