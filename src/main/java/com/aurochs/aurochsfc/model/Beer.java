package com.aurochs.aurochsfc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Beer")
@Table(name = "beer")
public class Beer implements Serializable {
    private static final long serialVersionUID = 1L;
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
            name = "id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "employee_id_fk"
            )
    )
    private  Employee employee;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Beer beer = (Beer) o;
        return Objects.equals(beerId, beer.beerId) && Objects.equals(beerName, beer.beerName) && Objects.equals(beerType, beer.beerType) && Objects.equals(employee, beer.employee);
    }

    @Override
    public int hashCode() {
        return Objects.hash(beerId, beerName, beerType, employee);
    }

    @Override
    public String toString() {
        return "Beer{" +
                "beerId=" + beerId +
                ", beerName='" + beerName + '\'' +
                ", beerType='" + beerType + '\'' +
                ", supporter=" + employee +
                '}';
    }
}
