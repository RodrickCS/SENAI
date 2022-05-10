package modelo;




public class Cadastro {

	String funcionario;
	String data;
	String evento;
	String despesas;
	Double valorDespesa;

	public Cadastro(String funcionario, String data, String evento, String despesas, Double valorDespesa) {

		this.funcionario = funcionario;
		this.data = data;
		this.evento = evento;
		this.despesas = despesas;
		this.valorDespesa = valorDespesa;
	}

	public Cadastro(String linha) {
		this.data = linha.split(";")[0];
		this.funcionario = linha.split(";")[1];
		this.evento = linha.split(";")[2];
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

	public String getEvento() {
		return evento;
	}

	public void setEvento(String evento) {
		this.evento = evento;
	}

	public String getDespesas() {
		return despesas;
	}

	public void setDespesas(String despesas) {
		this.despesas = despesas;
	}

	public Double getValorDespesa() {
		return valorDespesa;
	}

	public void setValorDespesa(Double valorDespesa) {
		this.valorDespesa = valorDespesa;
	}

	public String toCSV() {
		return funcionario + ";" + data + ";" + evento + ";" + despesas + ";" + valorDespesa + "\r\n";
	}

}
