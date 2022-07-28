package modelo;

public class Carro extends Veiculo {

	String tipo;
	int passageiros;

	public Carro(String tipo, int passageiros, String placa, int anoModelo, int anoFabricacao, String Modelo,
			String Marca, double Valor) {
		super(placa, anoModelo, anoFabricacao, Modelo, Marca, Valor);
		this.tipo = tipo;
		this.passageiros = passageiros;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getPassageiros() {
		return passageiros;
	}

	public void setPassageiros(int passageiros) {
		this.passageiros = passageiros;
	}

	@Override
	public String toString() {
		System.out.println("Tipo\tPassageiros");
		return tipo + "\t" + passageiros + "\t" + super.toString();
	}

}

