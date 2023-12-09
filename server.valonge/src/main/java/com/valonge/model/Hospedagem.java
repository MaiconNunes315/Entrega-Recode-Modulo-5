package com.valonge.model;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.ForeignKey;

@Table
@Entity(name ="hospedagem")
public class Hospedagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private double precoDiaria;
	private String endereco, nomeLocal, cidade;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="viagem_hospedagem",
	joinColumns=@JoinColumn(name="viagem_id"),
	inverseJoinColumns=@JoinColumn(name="hospedagem_id"))
	private Set<Viagem> viagem = new HashSet<>();
	
//	@JoinColumn(foreignKey = @ForeignKey(name = "id_destino"))
//	@ManyToMany
	//private Destino destino;

	public Set<Viagem> getViagem() {
		return viagem;
	}

	public void setViagem(Set<Viagem> viagem) {
		this.viagem = viagem;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getPrecoDiaria() {
		return precoDiaria;
	}

	public void setPrecoDiaria(double precoDiaria) {
		this.precoDiaria = precoDiaria;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getNomeLocal() {
		return nomeLocal;
	}

	public void setNomeLocal(String nomeLocal) {
		this.nomeLocal = nomeLocal;
	}

//	public Destino getDestino() {
//		return destino;
//	}
//
//	public void setDestino(Destino destino) {
//		this.destino = destino;
//	}
//	
	
}
