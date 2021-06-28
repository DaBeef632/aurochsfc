package com.aurochs.aurochsfc.repository;

import com.aurochs.aurochsfc.model.Checkin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CheckinRespository extends JpaRepository <Checkin, Long> {
}
