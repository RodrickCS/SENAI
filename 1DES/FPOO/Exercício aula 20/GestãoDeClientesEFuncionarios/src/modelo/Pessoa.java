package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Pessoa {

	public String nome;
	public int telefone;
	public Date nascimento;
	SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public Pessoa(String nome, int telefone, String nascimento) throws ParseException {

		this.nome = nome;
		this.telefone = telefone;
		this.nascimento = df.parse(nascimento);
	}

	@Override
	public String toString() {
		System.out.println("Nome\tTelefone\tData de Nascimento");
		return nome + "\t" + telefone + "\t" + nascimento;
	}

}
