package com.aurochs.aurochsfc.service;

import com.aurochs.aurochsfc.exception.VenueNotFoundException;
import com.aurochs.aurochsfc.model.Venue;
import com.aurochs.aurochsfc.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VenueService {
    private final VenueRepository venueRepository;

    @Autowired
    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    public Venue addVenue(Venue venue){
        return venueRepository.save(venue);
    }

    public List<Venue> findAllVenues(){
        return venueRepository.findAll();
    }

    public Venue updateVenue(Venue venue){
        return venueRepository.save(venue);
    }

    public void deleteVenue(Long venueId){
        venueRepository.deleteVenueByVenueId(venueId);
    }

    public Venue findVenueByVenueId(Long venueId){
        return venueRepository.findVenueByVenueId(venueId).orElseThrow(()-> new VenueNotFoundException("Venue by id " + venueId + " was not found"));
    }
}