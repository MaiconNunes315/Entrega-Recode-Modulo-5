package com.valonge.dto;


public class SaleDto {
	private int desconto;
	private String observacoes, endereco, nome_local, cidade;
	private long id;
	private double preco_total;
	
	public SaleDto(int desconto, String observacoes, String endereco, String nome_local, String cidade, long id,
			double preco_total) {
		super();
		this.desconto = desconto;
		this.observacoes = observacoes;
		this.endereco = endereco;
		this.nome_local = nome_local;
		this.cidade = cidade;
		this.id = id;
		this.preco_total = preco_total;
	}
	public SaleDto() {
		super();
	}
	public int getDesconto() {
		return desconto;
	}
	public void setDesconto(int desconto) {
		this.desconto = desconto;
	}
	public String getObservacoes() {
		return observacoes;
	}
	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
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
	public String getNome_local() {
		return nome_local;
	}
	public void setNome_local(String nome_local) {
		this.nome_local = nome_local;
	}
	public double getPreco_total() {
		return preco_total;
	}
	public void setPreco_total(double preco_total) {
		this.preco_total = preco_total;
	}
	
	
}
