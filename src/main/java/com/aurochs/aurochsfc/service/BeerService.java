package com.aurochs.aurochsfc.service;

import com.aurochs.aurochsfc.exception.BeerNotFoundException;
import com.aurochs.aurochsfc.model.Beer;
import com.aurochs.aurochsfc.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BeerService {
    private  final BeerRepository beerRepository;

    @Autowired
    public BeerService(BeerRepository beerRepository){
        this.beerRepository = beerRepository;
    }

    public Beer addBeer(Beer beer){
        return beerRepository.save(beer);
    }

    public List<Beer> findAllBeers(){
        return beerRepository.findAll();
    }

    public Beer updateBeer(Beer beer){
        return beerRepository.save(beer);
    }

    public Beer findBeerById(Long beerId){
        return beerRepository.findBeerByBeerId(beerId).orElseThrow(() -> new BeerNotFoundException("Beer by id " + beerId + " was not found"));
    }

//    public Optional<Beer> findBeerByBeerName(String beerName){
//        return beerRepository.findBeerByBeerName(beerName);
//    }

    public void deleteBeer(Long beerId){
        beerRepository.deleteBeerByBeerId(beerId);
    }

}

