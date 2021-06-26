package com.aurochs.aurochsfc.repository;


import com.aurochs.aurochsfc.model.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RepositoryRestResource
public interface SupporterRepository extends JpaRepository<Supporter, Long> {
    void deleteSupporterById(Long id);

    Optional<Supporter> findSupporterById(Long id);
}