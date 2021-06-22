package com.aurochs.aurochsfc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Beer")
@Table(name = "beer")
public class Beer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "beer_id", nullable = false, updatable = false)
    private Long beerId;
    @Column(name = "beer_name")
    private String beerName;
    @Column(name = "beer_type")
    private String beerType;
    @ManyToOne
    @JoinColumn(
            name = "supporter_id",
            referencedColumnName = "supporter_id",
            foreignKey = @ForeignKey(
                    name = "beer_id_fk"
            )
    )
    private  Supporter supporter;

    @Override
    public String toString() {
        return "Beer{" +
                "beerId=" + beerId +
                ", beerName='" + beerName + '\'' +
                ", beerType='" + beerType + '\'' +
                ", supporter=" + supporter +
                '}';
    }
}
