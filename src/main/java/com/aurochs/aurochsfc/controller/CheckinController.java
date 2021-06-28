package com.aurochs.aurochsfc.controller;

import com.aurochs.aurochsfc.model.Beer;
import com.aurochs.aurochsfc.model.Checkin;
import com.aurochs.aurochsfc.service.BeerService;
import com.aurochs.aurochsfc.service.CheckinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class CheckinController {


    private final CheckinService checkinService;

    public CheckinController(CheckinService checkinService) {
        this.checkinService = checkinService;
    }

    @GetMapping("/checkin")
    public ResponseEntity<List<Checkin>> getAllCheckin() {
        List<Checkin> checkins = checkinService.findAllCheckins();
        return new ResponseEntity<>(checkins, HttpStatus.OK);
    }

    @GetMapping("/checkin/{checkinId}")
    public ResponseEntity<Checkin> getCheckinById(@PathVariable("checkinId") Long checkinId) {
        Checkin checkin = checkinService.findById(checkinId);
        return new ResponseEntity<>(checkin, HttpStatus.OK);
    }

}
