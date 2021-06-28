package com.aurochs.aurochsfc.service;

import com.aurochs.aurochsfc.exception.UserNotFoundException;
import com.aurochs.aurochsfc.model.Beer;
import com.aurochs.aurochsfc.model.Checkin;
import com.aurochs.aurochsfc.repository.BeerRepository;
import com.aurochs.aurochsfc.repository.CheckinRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckinService {


    private final CheckinRespository checkinRepository;

    @Autowired
    public CheckinService(CheckinRespository checkinRepository){
        this.checkinRepository = checkinRepository;
    }

    public Checkin addCheckin(Checkin checkin){
        return checkinRepository.save(checkin);
    }

    public List<Checkin> findAllCheckins(){
        return checkinRepository.findAll();
    }

    public void deleteCheckin(Long checkinId){
        checkinRepository.deleteById(checkinId);
    }


    public Checkin findById(Long checkinId) {
        return checkinRepository.findById(checkinId).orElseThrow(()-> new UserNotFoundException("Checkin by id " + checkinId + " was not found"));

    }


}
