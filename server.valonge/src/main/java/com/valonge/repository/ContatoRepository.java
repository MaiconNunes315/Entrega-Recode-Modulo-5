package com.valonge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valonge.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
