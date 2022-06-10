package modelo;

import java.text.SimpleDateFormat;
import java.util.Objects;

public class Orcamento {

	private String funcionario;
	private String data;
	private String servico;
	private String despesas;
	private int id;

	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	public Orcamento(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public String getId(String s) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
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
		Orcamento other = (Orcamento) obj;
		return id == other.id;
	}

	public Orcamento(int id, String funcionario, String data, String evento, String despesas) {

		this.id = id;
		this.funcionario = funcionario;
		this.data = data;
		this.servico = evento;
		this.despesas = despesas;

	}

	public Orcamento(String linha) {
		this.data = linha.split(";")[0];
		this.funcionario = linha.split(";")[1];
		this.servico = linha.split(";")[2];
		this.despesas = linha.split(";")[3];
	}

	public String getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(String funcionario) {
		this.funcionario = funcionario;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getServico() {
		return servico;
	}

	public void setServico(String servico) {
		this.servico = servico;
	}

	public String getDespesas() {
		return despesas;
	}
	public int getDespesas(String s) {
		return  Integer.parseInt(despesas);
	}

	public void setDespesas(String despesas) {
		this.despesas = despesas;
	}

	public String toCSV() {
		return id + ";" + funcionario + ";" + data + ";" + servico + ";" + despesas + ";" + "\r\n";
	}

	public String[] toVetor() {
		return new String[] { String.format("%d", id), funcionario, sdf.format(data), servico,
				String.format("%.2f", despesas) };
	}

}
