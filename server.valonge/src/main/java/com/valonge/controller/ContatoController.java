package com.valonge.controller;


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

import com.valonge.model.Contato;
import com.valonge.model.ResponseJson;
import com.valonge.repository.ContatoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ContatoController {
	
	@Autowired
	ContatoRepository contRepo;
	
	@GetMapping("/contatos")
	public List<Contato> getAllContato(){
		
		return contRepo.findAll();
		
	}
	
	@GetMapping("/contato/{id}")
	public Contato searchcontato(@PathVariable long id) {
		return contRepo.findById(id).get();
		
	}
	
	@PostMapping("/new-contato")
	public ResponseEntity<ResponseJson> addContato(@RequestBody Contato contato) {
		
		contRepo.save(contato);
		return new ResponseEntity<>(new ResponseJson("Mensagem enviada, em breve entraremos em contato", false), HttpStatusCode.valueOf(201));
		
	}
	
	@DeleteMapping("/delete-contato/{id}")
	public ResponseEntity<ResponseJson> deleteContato(@PathVariable long id) {
		
		contRepo.deleteById(id);
		return new ResponseEntity<>(new ResponseJson("Contato deletado", false), HttpStatusCode.valueOf(200));
	}
	
	@PutMapping("/edit-contato/{id}")
	public Contato putContato(@PathVariable long id, @RequestBody Contato Contato) {
//		contato Contato = contRepo.getById(id);
			contRepo.save(Contato);
		return Contato; 
	}

}
