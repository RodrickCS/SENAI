package modelo;

import java.text.ParseException;

public class Funcionario extends Pessoa {

	int matricula;
	double comissao;

	public Funcionario(int matricula, double comissao, String nome, int telefone, String nascimento)
			throws ParseException {
		super(nome, telefone, nascimento);
		this.matricula = matricula;
		this.comissao = comissao;

	}

	public int getMatricula() {
		return matricula;
	}

	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}

	public double getComissao() {
		return comissao;
	}

	public void setComissao(double comissao) {
		this.comissao = comissao;
	}

	@Override
	public String toString() {
		return matricula + "\t" + comissao + "\t" + super.toString();
	}

}