package com.valonge.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.valonge.model.Hospedagem;
import com.valonge.model.ResponseJson;
import com.valonge.model.Viagem;
import com.valonge.repository.HospedagemRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HospedagemController {
	
	@Autowired
	private HospedagemRepository hRepo;

	
	@GetMapping("/hospedagens")
	public List<Hospedagem> getHospedagem(){
		return hRepo.findAll();
	}
	
	@GetMapping("/hospedagem/{id}")
	public Hospedagem getHospedagem(@PathVariable("id") Long id){
		return hRepo.findById(id).get();
	}
	
	@GetMapping("/hospedagem/cidade/{cidade}")
	public List<Hospedagem> getHospedagemPorCidade(@PathVariable("cidade") String cidade){
		cidade = cidade.replace("+", " ");
		return hRepo.findAllLodgingCity(cidade);
		//return hRepo.findById(id).get();
	}
	
	@PostMapping("/new-hospedagem")
	public ResponseEntity<ResponseJson> postTHospedagem(@RequestBody Hospedagem hospedagem) {
		
		try {
			hRepo.save(hospedagem);
			return new ResponseEntity<>(new ResponseJson("Hospedagem cadastrada com sucesso", false), HttpStatusCode.valueOf(201)); 
			
		}catch (Exception e) {
			return new ResponseEntity<>(new ResponseJson(e.getLocalizedMessage(), true), HttpStatusCode.valueOf(400));
		}
		
	}
	
	@PutMapping("/editar-hospedagem")
	public ResponseEntity<ResponseJson> updateHospedagem(@RequestBody Hospedagem hospedagem) {

		try {
			hRepo.save(hospedagem);
			return new ResponseEntity<>(new ResponseJson("Hospedagem atualizado com sucesso", false), HttpStatusCode.valueOf(201)); 
			
		}catch (Exception e) {
			return new ResponseEntity<>(new ResponseJson(e.getLocalizedMessage(), true), HttpStatusCode.valueOf(400));
		}
	}
	
	@DeleteMapping("/deletar-hospedagem/{id}")
	public ResponseEntity<ResponseJson> deleteHospedagem(@PathVariable("id") Long id){
		
		
		try {
			hRepo.deleteById(id);
			return new ResponseEntity<>(new ResponseJson("Hospedagem deletado com sucesso", false), HttpStatusCode.valueOf(201)); 
			
		}catch (Exception e) {
			return new ResponseEntity<>(new ResponseJson(e.getLocalizedMessage(), true), HttpStatusCode.valueOf(400));
		}
	}

}
