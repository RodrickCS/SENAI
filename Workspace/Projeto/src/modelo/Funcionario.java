package modelo;

import java.util.Objects;
import java.util.Locale;

public class Funcionario {
	

private int id;
private String nome;
private String funcao;
private String categoria;
private int qtc;
private double vlr;

private final Locale BRASIL = new Locale("pt", "BR");

public Funcionario(int id, String nome, String funcao, String categoria, int qtc, double vlr) {
	super();
	this.id = id;
	this.nome = nome;
	this.funcao = funcao;
	this.categoria = categoria;
	this.qtc = qtc;
	this.vlr = vlr;
}

public Funcionario(String linha) {
	this.id = Integer.parseInt(linha.split(";")[0]);
	this.nome = linha.split(";")[1];
	this.funcao = linha.split(";")[2];
	this.categoria = linha.split(";")[3];
	this.qtc = Integer.parseInt(linha.split(";")[4]);
	this.vlr = Double.parseDouble(linha.split(";")[5]);

}

public int getId() {
	return id;
}

public String getId(String s) {
	return String.format("%d",id);
}

public void setId(int id) {
	this.id = id;
}

public String getNome() {
	return nome;
}

public void setNome(String nome) {
	this.nome = nome;
}

public String getFuncao() {
	return funcao;
}

public void setFuncao(String funcao) {
	this.funcao = funcao;
}

public String getCategoria() {
	return categoria;
}

public void setCategoria(String categoria) {
	this.categoria = categoria;
}

public int getQtc() {
	return qtc;
}
public String getQtc(String s) {
	return String.format("%d", qtc);
}


public void setQtc(int qtc) {
	this.qtc = qtc;
}

public double getVlr() {
	return vlr;
}

public String getVlr(String s) {
	return String.format("%.0f", vlr);
}

public void setVlr(double vlr) {
	this.vlr = vlr;
}
public int hashCode() {
	return Objects.hash(id);
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Funcionario other = (Funcionario) obj;
	return id == other.id;
}

@Override
public String toString() {
	return id + " \t " + nome + " \t " + funcao + " \t " + categoria + " \t " + qtc + " \t " + vlr;
}

public String toCSV() {
	 
	return  id + ";" + nome + ";" + funcao + ";" + categoria + ";" + qtc + ";" + vlr + "\r\n";
}
}
