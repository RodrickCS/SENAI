package modelo;

public class Veiculo {

	String placa;
	int anoModelo;
	int anoFabricacao;
	String Modelo;
	String Marca;
	double Valor;

	public Veiculo(String placa, int anoModelo, int anoFabricacao, String Modelo, String Marca, double Valor) {
		super();
		this.placa = placa;
		this.anoModelo = anoModelo;
		this.anoFabricacao = anoFabricacao;
		this.Modelo = Modelo;
		this.Marca = Marca;
		this.Valor = Valor;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public int getAnoModelo() {
		return anoModelo;
	}

	public void setAnoModelo(int anoModelo) {
		this.anoModelo = anoModelo;
	}

	public int getAnoFabricacao() {
		return anoFabricacao;
	}

	public void setAnoFabricacao(int anoFabricacao) {
		this.anoFabricacao = anoFabricacao;
	}

	public String getModelo() {
		return Modelo;
	}

	public void setModelo(String modelo) {
		Modelo = modelo;
	}

	public String getMarca() {
		return Marca;
	}

	public void setMarca(String marca) {
		Marca = marca;
	}

	public double getValor() {
		return Valor;
	}

	public void setValor(double valor) {
		Valor = valor;
	}

	@Override
	public String toString() {
		System.out.println("Placa\tAno modelo\tAno fabricação\tModelo\tMarca\tValor");
		return placa + "\t" + anoModelo + "\t" + anoFabricacao + "\t" + Modelo + "\t" + Marca + "\t" + Valor;
	}

}