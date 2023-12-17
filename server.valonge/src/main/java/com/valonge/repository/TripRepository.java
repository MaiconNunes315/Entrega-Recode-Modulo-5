package com.valonge.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.valonge.dto.SaleDto;
import com.valonge.model.Hospedagem;
import com.valonge.model.Viagem;

import jakarta.transaction.Transactional;

public interface TripRepository extends JpaRepository<Viagem, Long>{

	@Transactional
	@Modifying
	@Query(nativeQuery= true, value= "INSERT INTO viagem_hospedagem (viagem_id, hospedagem_id) VALUES (:viagemId, :hospedagemId)")
	void addRelationship(@Param("viagemId") Long viagemId, @Param("hospedagemId") Long hospedagemId);
	

	@Query(nativeQuery= true, 
			value = "SELECT v.desconto, v.observacoes, v.id as viagem_id, v.preco_total, h.endereco, h.nome_local, h.cidade "
			+ " FROM viagem_hospedagem as vh"
			+ " INNER JOIN viagem as v"
			+ " ON v.id = vh.viagem_id"
			+ " INNER JOIN hospedagem as h"
			+ " ON h.id = vh.hospedagem_id"
			)
	List<Object> findAllTripAndLodging();
	
}
