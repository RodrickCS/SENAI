package modelo;

import java.text.ParseException;

public class Cliente extends Pessoa {

	int id;
	double creditoLimite;

	public Cliente(int id, double creditoLimite, String nome, int telefone, String nascimento) throws ParseException {
		super(nome, telefone, nascimento);
		this.id = id;
		this.creditoLimite = creditoLimite;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getCreditoLimite() {
		return creditoLimite;
	}

	public void setCreditoLimite(double creditoLimite) {
		this.creditoLimite = creditoLimite;
	}

	@Override
	public String toString() {
		return id + "\t" + creditoLimite + "\t" + super.toString();
	}

}