package com.valonge.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table
@Entity(name="viagem")
public class Viagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private int desconto, possuiHospedagem;
	private String observacoes;
	private LocalDateTime dataEntrada, dataSaida;
	private double preco,precoTotal;
	//private Destino destino;
	
	@ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="usuario_id", nullable=false)
	private Users usuario;
	
	@JsonIgnore
	@ManyToMany(mappedBy="viagem", fetch = FetchType.EAGER)
	private Set<Hospedagem> hospedagem = new HashSet<>();
	
	
	public Set<Hospedagem> getHospedagem() {
		return hospedagem;
	}
	public void setHospedagem(Set<Hospedagem> hospedagem) {
		this.hospedagem = hospedagem;
	}
	//private Hospedagem hospedagem;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getDesconto() {
		return desconto;
	}
	public void setDesconto(int desconto) {
		this.desconto = desconto;
	}
	public int getPossuiHospedagem() {
		return possuiHospedagem;
	}
	public void setPossuiHospedagem(int possuiHospedagem) {
		this.possuiHospedagem = possuiHospedagem;
	}
	public String getObservacoes() {
		return observacoes;
	}
	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
	public LocalDateTime getDataEntrada() {
		return dataEntrada;
	}
	public void setDataEntrada(LocalDateTime dataEntrada) {
		this.dataEntrada = dataEntrada;
	}
	public LocalDateTime getDataSaida() {
		return dataSaida;
	}
	public void setDataSaida(LocalDateTime dataSaida) {
		this.dataSaida = dataSaida;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}

	public double getPrecoTotal() {
		return precoTotal;
	}
	public void setPrecoTotal(double precoTotal) {
		this.precoTotal = precoTotal;
	}
//	public Destino getDestino() {
//		return destino;
//	}
//	public void setDestino(Destino destino) {
//		this.destino = destino;
//	}
	public Users getUsuario() {
		return usuario;
	}
	public void setUsuario(Users usuario) {
		this.usuario = usuario;
	}
//	public Hospedagem getHospedagem() {
//		return hospedagem;
//	}
//	public void setHospedagem(Hospedagem hospedagem) {
//		this.hospedagem = hospedagem;
//	}
//	
	
}
