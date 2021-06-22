package com.aurochs.aurochsfc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Venue")
@Table(name = "venue")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "venue_id",
            nullable = false,
            insertable = false)
    private Long venueId;

    @Column(name="venue_name")
    private String venueName;

    @Column(name="venue_address", unique = true)
    private String barAddress;

    @Column(name = "venue_phone")
    private String venuePhone;

    @Column(name = "venue_Email")
    private String venueEmail;

    @Column(name = "venue_details")
    private String venueDetails;

    @Override
    public String toString() {
        return "Venue{" +
                "venueId=" + venueId +
                ", venueName='" + venueName + '\'' +
                ", barAddress='" + barAddress + '\'' +
                ", venuePhone='" + venuePhone + '\'' +
                ", venueEmail='" + venueEmail + '\'' +
                ", venueDetails='" + venueDetails + '\'' +
                '}';
    }
}