package com.aurochs.aurochsfc.repository;

import com.aurochs.aurochsfc.model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface VenueRepository extends JpaRepository<Venue, Long> {
    void deleteVenueByVenueId(Long venueId);

    Optional<Venue> findVenueByVenueId(Long venueId);
}