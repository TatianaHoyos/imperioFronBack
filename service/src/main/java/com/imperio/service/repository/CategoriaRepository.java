package com.imperio.service.repository;

import com.imperio.service.model.entity.CategoriaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository  extends JpaRepository<CategoriaEntity,Integer> {

}
