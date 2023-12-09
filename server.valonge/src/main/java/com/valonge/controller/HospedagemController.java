package com.valonge.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.valonge.model.Hospedagem;
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
	
	@PostMapping("/new-hospedagem")
	public Hospedagem postTHospedagem(@RequestBody Hospedagem hospedagem) {
		
		return hRepo.save(hospedagem);
		
	}
	
	@PutMapping("/editar-hospedagem")
	public Hospedagem updateHospedagem(@RequestBody Hospedagem hospedagem) {

		return hRepo.save(hospedagem);
	}
	
	@DeleteMapping("/deletar-hospedagem/{id}")
	public void deleteHospedagem(@PathVariable("id") Long id){
		
		hRepo.deleteById(id);
	}

}
