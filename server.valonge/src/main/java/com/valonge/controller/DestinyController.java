package com.valonge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.valonge.model.Destino;
import com.valonge.model.ResponseJson;
import com.valonge.repository.DestinyRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DestinyController {

	@Autowired
	DestinyRepository desRepo;

	@GetMapping("/destinos")
	public List<Destino> getAllDestiny() {

		return desRepo.findAll();

	}

	@GetMapping("/destino/{id}")
	public Destino searchDestino(@PathVariable long id) {
		return desRepo.findById(id).get();

	}

	@PostMapping("/new-destino")
	public ResponseEntity<ResponseJson> addDestiny(@RequestBody Destino destiny) {

		try {
			desRepo.save(destiny);
			return new ResponseEntity<>(
					new ResponseJson("Destino " + destiny.getCidade() + " cadastrado" + " com sucesso", false),
					HttpStatusCode.valueOf(201));
		} catch (Exception e) {
			desRepo.save(destiny);
			return new ResponseEntity<>(new ResponseJson(e.getMessage(), true), HttpStatusCode.valueOf(400));
		}

	}

	@DeleteMapping("/delete-destino/{id}")
	public ResponseJson deleteDestiny(@PathVariable long id) {

		desRepo.deleteById(id);
		return new ResponseJson("Destino deletado com sucesso", false);
	}

	@PutMapping("painel-de-controle/edit-destino/{id}")
	public ResponseEntity<ResponseJson> putDestiny(@PathVariable long id, @RequestBody Destino destiny) {

		try {
			desRepo.save(destiny);
			return new ResponseEntity<>(new ResponseJson("Destino atualizado com sucesso", false),
					HttpStatusCode.valueOf(200));
		} catch (Exception e) {
			return new ResponseEntity<>(new ResponseJson(e.getMessage(), true), HttpStatusCode.valueOf(400));
		}
	}

}
