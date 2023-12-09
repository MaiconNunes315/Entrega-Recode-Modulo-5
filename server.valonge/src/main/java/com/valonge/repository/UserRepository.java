package com.valonge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valonge.model.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	 Users findByEmail(String email);
	 Users findByCpf(String cpf);
}
