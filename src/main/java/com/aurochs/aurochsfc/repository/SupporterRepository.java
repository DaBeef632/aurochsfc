package com.aurochs.aurochsfc.repository;


import com.aurochs.aurochsfc.model.Employee;
import com.aurochs.aurochsfc.model.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface SupporterRepository extends JpaRepository<Supporter, Long> {
    void deleteSupporterById(Long id);

    Supporter findSupporterByEmail(final String email);
    Optional<Supporter> findSupporterById(Long id);


}
