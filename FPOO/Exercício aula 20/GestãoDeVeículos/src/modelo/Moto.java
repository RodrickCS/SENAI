package modelo;

public class Moto extends Veiculo {

	int cilindradas;

	public Moto(int cilindradas, String placa, int anoModelo, int anoFabricacao, String Modelo, String Marca,
			double Valor) {
		super(placa, anoModelo, anoFabricacao, Modelo, Marca, Valor);

		this.cilindradas = cilindradas;
	}

	public int getCilindradas() {
		return cilindradas;
	}

	public void setCilindradas(int cilindradas) {
		this.cilindradas = cilindradas;
	}

	@Override
	public String toString() {
		System.out.println("Cilindradas");
		return cilindradas + super.toString();
	}

}