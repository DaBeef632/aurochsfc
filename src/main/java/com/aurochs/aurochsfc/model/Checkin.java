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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="AurochsCheckin")
public class Checkin implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "checkin_id", nullable = false, updatable = false)
    private Long checkinId;

    @OneToMany(
            mappedBy = "checkin",
            orphanRemoval = true,
            cascade = CascadeType.ALL
    )
   private List<Supporter> supporters = new ArrayList<>();

    @Column(name="has_aurochs")
    private boolean hasAurochs;

    @Column(name="venue")
    private String venue;

}
