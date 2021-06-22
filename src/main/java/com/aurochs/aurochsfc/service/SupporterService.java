package com.aurochs.aurochsfc.service;

import com.aurochs.aurochsfc.exception.SupporterNotFoundException;
import com.aurochs.aurochsfc.model.Supporter;
import com.aurochs.aurochsfc.repository.SupporterRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SupporterService {
    private  final SupporterRepository supporterRepository;

    @Autowired
    public SupporterService(SupporterRepository supporterRepository){
        this.supporterRepository = supporterRepository;
    }

    public Supporter addSupporter(Supporter supporter){
        return supporterRepository.save(supporter);
    }

    public List<Supporter> findAllSupporters(){
        return supporterRepository.findAll();
    }

    public Supporter updateSupporter(Supporter supporter){
        return supporterRepository.save(supporter);
    }

    public Supporter findSupporterById(Long id){
        return supporterRepository.findSupporterById(id).orElseThrow(() -> new SupporterNotFoundException("Supporter by id " + id + " was not found"));
    }

    public void deleteSupporter(Long id){
        supporterRepository.deleteSupporterById(id);
    }
}
