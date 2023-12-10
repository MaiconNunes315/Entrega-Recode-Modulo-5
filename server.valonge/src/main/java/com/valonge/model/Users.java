package com.valonge.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table
@Entity(name="usuarios")

public class Users {
	

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@Column(nullable=false)
private String nome;

@Column(nullable=false)
@DateTimeFormat(iso = ISO.DATE)
private LocalDate dataNascimento;

@Column(name="cpf", length=14, nullable=false, unique=true)
private String cpf;

@Column(name="email", length=30, nullable=false, unique=true)
private String email;

@Column(nullable=false)
private String rg,cidade, endereco, estado, telefone,senha, tipoUsuario;

private long cep;

@Column(nullable=false)
@DateTimeFormat(iso = ISO.DATE)
private LocalDateTime criadoEm, modificadoEm;

@OneToMany(fetch = FetchType.LAZY,mappedBy="usuario",cascade = CascadeType.REMOVE)
@JsonIgnore
private Set<Viagem> viagens;


public Set<Viagem> getViagens() {
	return viagens;
}

public void setViagens(Set<Viagem> viagens) {
	this.viagens = viagens;
}



public long getCep() {
	return cep;
}

public void setCep(long cep) {
	this.cep = cep;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getNome() {
	return nome;
}

public void setNome(String nome) {
	this.nome = nome;
}

public String getCidade() {
	return cidade;
}

public void setCidade(String cidade) {
	this.cidade = cidade;
}

public LocalDate getDataNascimento() {
	return dataNascimento;
}

public void setDataNascimento(LocalDate dataNascimento) {
	this.dataNascimento = dataNascimento;
}

public String getRg() {
	return rg;
}

public void setRg(String rg) {
	this.rg = rg;
}

public String getEndereco() {
	return endereco;
}

public void setEndereco(String endereco) {
	this.endereco = endereco;
}

public String getCpf() {
	return cpf;
}

public void setCpf(String cpf) {
	this.cpf = cpf;
}

public String getEstado() {
	return estado;
}

public void setEstado(String estado) {
	this.estado = estado;
}

public String getTelefone() {
	return telefone;
}

public void setTelefone(String telefone) {
	this.telefone = telefone;
}

public String getSenha() {
	return senha;
}

public void setSenha(String senha) {
	this.senha = senha;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getTipoUsuario() {
	return tipoUsuario;
}

public void setTipoUsuario(String tipoUsuario) {
	this.tipoUsuario = tipoUsuario;
}

public LocalDateTime getCriadoEm() {
	return criadoEm;
}

public void setCriadoEm(LocalDateTime criadoEm) {
	this.criadoEm = criadoEm;
}

public LocalDateTime getModificadoEm() {
	return modificadoEm;
}

public void setModificadoEm(LocalDateTime modificadoEm) {
	this.modificadoEm = modificadoEm;
}


}
