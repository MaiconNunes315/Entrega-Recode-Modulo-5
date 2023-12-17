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

import com.valonge.model.ResponseJson;
import com.valonge.model.Users;
import com.valonge.model.Viagem;
import com.valonge.repository.TripRepository;
import com.valonge.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TripController {
	@Autowired
	private TripRepository tripRepo;
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/viagem")
	public List<Viagem> getViagem(){
		
		return tripRepo.findAll();
	}
	
	@GetMapping("/viagem/{id}")
	public Viagem searchTrip(@PathVariable("id") Long id) {
		
		return tripRepo.findById(id).get();
		
	}
	
	@PostMapping("/new-viagem")
	public ResponseEntity<ResponseJson> postTrip(@RequestBody Viagem viagem) {
		
//		user.setCriadoEm(LocalDateTime.now());
//		user.setModificadoEm(LocalDateTime.now());
//		user.setTipoUsuario("USER");
		
		
//		Users user = userRepo.findById((long) 37).get();
//		viagem.setUsuario(user);
		try {
			Viagem v = tripRepo.save(viagem);
			return new ResponseEntity<ResponseJson>(new ResponseJson("Viagem comprada com sucesso, Boa viagem !", false, v), HttpStatusCode.valueOf(201)); 
			
		}catch (Exception e) {
			return new ResponseEntity<ResponseJson>(new ResponseJson(e.getMessage(), true), HttpStatusCode.valueOf(400));
		}
		
	}
	
	@PutMapping("/editar-viagem/{id}")
	public Viagem updateTrip(@RequestBody Viagem viagemDetails) {

		return tripRepo.save(viagemDetails);
	}
	
	@DeleteMapping("/deletar-viagem/{id}")
	public String deleteTrip(@PathVariable("id") Long id) {
		tripRepo.deleteById(id);
		return "Usuário " + id +" deletado com sucesso";
	}

}
