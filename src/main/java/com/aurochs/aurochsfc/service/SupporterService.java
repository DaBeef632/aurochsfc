package com.aurochs.aurochsfc.service;

import com.aurochs.aurochsfc.exception.SupporterNotFoundException;
import com.aurochs.aurochsfc.exception.UserNotFoundException;
import com.aurochs.aurochsfc.model.Employee;
import com.aurochs.aurochsfc.model.Supporter;
import com.aurochs.aurochsfc.repository.SupporterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    public Supporter findBySupporterEmail(String email){
        return supporterRepository.findSupporterByEmail(email);
    }

    public Supporter findSupporterById(Long id){
        return supporterRepository.findSupporterById(id).orElseThrow(()-> new UserNotFoundException("User by id " + id + " was not found"));
    }
    public void deleteSupporter(Long supporterId){
        supporterRepository.deleteSupporterById(supporterId);
    }


}
