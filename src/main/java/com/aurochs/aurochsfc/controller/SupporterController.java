package com.aurochs.aurochsfc.controller;

import com.aurochs.aurochsfc.model.Supporter;
import com.aurochs.aurochsfc.service.SupporterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class SupporterController {
    private final SupporterService supporterService;

    public SupporterController(SupporterService supporterService) {
        this.supporterService = supporterService;
    }

    @GetMapping("/supporters")
    public ResponseEntity<List<Supporter>> getAllSupporters(){
        List<Supporter> supporters = supporterService.findAllSupporters();
        return new ResponseEntity<>(supporters, HttpStatus.OK);
    }

    @GetMapping("/supporters/{id}")
    public ResponseEntity<Supporter> getSupporterById(@PathVariable("id") Long id){
        Supporter supporter = supporterService.findSupporterById(id);
        return new ResponseEntity<>(supporter, HttpStatus.OK);
    }


    @PostMapping("/supporters")
    public ResponseEntity<Supporter> addSupporter(@RequestBody Supporter supporter){
        Supporter newSupporter = supporterService.addSupporter(supporter);
        return new ResponseEntity<>(newSupporter, HttpStatus.CREATED);
    }

    @PutMapping("/supporters/{supporterId}")
    public ResponseEntity<Supporter> updateSupporter(@RequestBody Supporter supporter){
        Supporter updateSupporter = supporterService.updateSupporter(supporter);
        return new ResponseEntity<>(updateSupporter, HttpStatus.OK);
    }
    @DeleteMapping("/supporters/{supporterId}")
    public ResponseEntity<Supporter> deleteSupporter(@PathVariable("supporterId") Long supporterId){
        supporterService.deleteSupporter(supporterId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
