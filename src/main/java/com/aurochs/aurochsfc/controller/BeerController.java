package com.aurochs.aurochsfc.controller;


import com.aurochs.aurochsfc.model.Beer;
import com.aurochs.aurochsfc.service.BeerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class BeerController {

    private final BeerService beerService;

    public BeerController(BeerService beerService) {
        this.beerService = beerService;
    }

    @GetMapping("/beers")
    public ResponseEntity<List<Beer>> getAllBeer() {
        List<Beer> beers = beerService.findAllBeers();
        return new ResponseEntity<>(beers, HttpStatus.OK);
    }

    @GetMapping("/beers/{beerId}")
    public ResponseEntity<Beer> getBeerById(@PathVariable("beerId") Long beerId) {
        Beer beer = beerService.findBeerById(beerId);
        return new ResponseEntity<>(beer, HttpStatus.OK);
    }

//    @GetMapping("/find/{beerName}")
//    public ResponseEntity<Beer> getBeerByBeerName(@PathVariable("beerName") String beerName) {
//      Beer beer = beerService.findBeerByBeerName(beerName);
//        return new ResponseEntity<>(beer, HttpStatus.OK);
//    }

    @PostMapping("/beers")
    public ResponseEntity<Beer> addBeer(@RequestBody Beer beer) {
        Beer newBeer = beerService.addBeer(beer);
        return new ResponseEntity<>(newBeer, HttpStatus.CREATED);
    }

    @PutMapping("/beers/{beerId}")
    public ResponseEntity<Beer> updateBeer(@RequestBody Beer beer) {
        Beer updateBeer = beerService.updateBeer(beer);
        return new ResponseEntity<>(updateBeer, HttpStatus.OK);
    }

    @DeleteMapping("/beers/{beerId}")
    public ResponseEntity<Beer> deleteBeer(@PathVariable("beerId") Long beerId) {
        beerService.deleteBeer(beerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
