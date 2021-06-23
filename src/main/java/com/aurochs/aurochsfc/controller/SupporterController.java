package com.aurochs.aurochsfc.controller;

import com.aurochs.aurochsfc.model.Supporter;
import com.aurochs.aurochsfc.service.SupporterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supporter")
public class SupporterController {
    private final SupporterService supporterService;

    public SupporterController(SupporterService supporterService) {
        this.supporterService = supporterService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Supporter>> getAllSupporters(){
        List<Supporter> rocks = supporterService.findAllSupporters();
        return new ResponseEntity<>(rocks, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Supporter> getSupporterById(@PathVariable("supporterId") Long supporterId){
        Supporter rock = supporterService.findSupporterById(supporterId);
        return new ResponseEntity<>(rock, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Supporter> addSupporter(@RequestBody Supporter supporter){
        Supporter newSupporter = supporterService.addSupporter(supporter);
        return new ResponseEntity<>(newSupporter, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Supporter> updateBeer(@RequestBody Supporter supporter){
        Supporter updateSupporter = supporterService.updateSupporter(supporter);
        return new ResponseEntity<>(updateSupporter, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Supporter> deleteSupporter(@PathVariable("supporterId") Long supporterId){
        supporterService.deleteSupporter(supporterId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
