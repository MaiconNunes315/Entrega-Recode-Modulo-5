package com.valonge.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import com.valonge.dto.SaleDto;
import com.valonge.model.Hospedagem;


public interface HospedagemRepository extends JpaRepository<Hospedagem, Long>{

	@Query(nativeQuery= true, 
			value = "SELECT h.id, h.endereco, h.cidade, h.preco_diaria, h.nome_local "
			+ " FROM hospedagem as h"
			+ " INNER JOIN destino as d"
			+ " ON h.cidade = d.cidade"
			+ " WHERE h.cidade = :cidade" 
			)
	List<Hospedagem> findAllLodgingCity(@Param("cidade") String cidade);
	

//	@Query("SELECT u FROM Hospedagem u JOIN FETCH u.viagem")
//	List<SaleDto> findAllTripAndLodging();
}
