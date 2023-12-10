package com.valonge.controller;


import java.sql.SQLException;
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
import com.valonge.repository.UserRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/usuarios")
	public List<Users> getAllUsers(){
		return userRepo.findAll();
	}
	
	@GetMapping("/usuario/{id}")
	public Users searchUser(@PathVariable("id") Long id) {		
		return userRepo.findById(id).get();	
	}

	
	//Cadastrando usuário
	@PostMapping("/cadastro_usuario")
	public ResponseEntity<ResponseJson> postUser(@RequestBody Users user) {
		

		//confere se o usuário ja existe através do email ou do cpf que são unique no banco de dados
		Users userExistEmail = userRepo.findByEmail(user.getEmail());
		Users userExistCpf = userRepo.findByCpf(user.getCpf());
		
		// if existir retorna o erro se não existir retorna usuário cadastrado
		if(userExistCpf != null) {
			return new ResponseEntity<>(new ResponseJson("Cpf existente favor altere e tente novamente", true), HttpStatusCode.valueOf(400));
		}else if ( userExistEmail != null){
			return new ResponseEntity<>(new ResponseJson("Email existente favor altere e tente novamente", true), HttpStatusCode.valueOf(400));
		}
		else {
			user.setCriadoEm(LocalDateTime.now());	
		user.setModificadoEm(LocalDateTime.now());
		user.setTipoUsuario("USER");
			userRepo.save(user);	
			return new ResponseEntity<>(new ResponseJson("Usuário cadastrado com sucesso", false), HttpStatusCode.valueOf(201));
		}		
	}
	
	@PutMapping("/editar-usuario/{id}")
	public ResponseEntity<ResponseJson> updateClient(@RequestBody Users userDetails, @PathVariable("id") Long id) {
			Users user = userRepo.findById(id).get();
			userDetails.setCriadoEm(user.getCriadoEm());
			userDetails.setTipoUsuario(user.getTipoUsuario());
		userDetails.setModificadoEm(LocalDateTime.now());
		userRepo.save(userDetails);
		
		return new ResponseEntity<>(new ResponseJson("Usuário " + userDetails.getNome()+ " atualizado com sucesso", false), HttpStatusCode.valueOf(200));
	}
	
	@DeleteMapping("/deletar-usuario/{id}")
	public ResponseJson deleteUser(@PathVariable("id") Long id) {
		try{
			userRepo.deleteById(id);
			return new ResponseJson("Usuário " + id +" deletado com sucesso",false);
			
		}catch (Exception e) {
			return new ResponseJson(e.getMessage(), true);
		}
	}

}
