package com.valonge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valonge.model.Viagem;

public interface TripRepository extends JpaRepository<Viagem, Long>{

}
