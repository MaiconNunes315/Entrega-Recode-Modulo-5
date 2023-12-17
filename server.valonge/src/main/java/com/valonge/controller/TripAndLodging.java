package com.valonge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.valonge.dto.SaleDto;
import com.valonge.dto.TripAndLodgingDto;
import com.valonge.model.Hospedagem;
import com.valonge.model.ResponseJson;
import com.valonge.model.Viagem;
import com.valonge.repository.HospedagemRepository;
import com.valonge.repository.TripRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TripAndLodging {

	@Autowired
	private TripRepository tripRepo;
	
	
	@GetMapping("/promocoes")
	public List<Object> findAllTripAndLodging(){
		//return new ResponseEntity<>(new ResponseJson(List<TripAndLodgingDto>, false), HttpStatusCode.valueOf(200));
		return tripRepo.findAllTripAndLodging();
	
	}

	@PostMapping("/add-promocao")
	public ResponseEntity<ResponseJson> addTripAndLodging(@RequestBody TripAndLodgingDto tripLodging){
		try {
			tripRepo.addRelationship(tripLodging.getTripId(),tripLodging.getLodgingId());
			return new ResponseEntity<ResponseJson>(new ResponseJson("Destino com viagem cadastrado", false), HttpStatusCode.valueOf(201));	
		}catch (Exception e) {
			return new ResponseEntity<ResponseJson>(new ResponseJson("Não cadastrado, tente novamente !", true), HttpStatusCode.valueOf(400));
		}
		
	}
	
//	@DeleteMapping("/delete-promocao")
//	public ResponseEntity<ResponseJson> deleteTripAndLodging(){
//		
//		tripRepo.deleteById()
//		return new ResponseEntity<ResponseJson>(new ResponseJson("Deletado com sucesso", false), HttpStatusCode.valueOf(200));
//	}
}
