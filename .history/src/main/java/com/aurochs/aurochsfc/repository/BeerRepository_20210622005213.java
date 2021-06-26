package com.aurochs.aurochsfc.repository;

import com.aurochs.aurochsfc.model.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RepositoryRestResource
public interface BeerRepository extends JpaRepository<Beer, Long> {
    void deleteBeerByBeerId(Long beerId);

    Optional<Beer> findBeerByBeerId(Long beerId);


    Optional<Beer> findBeerByBeerName(String beerName);
}
