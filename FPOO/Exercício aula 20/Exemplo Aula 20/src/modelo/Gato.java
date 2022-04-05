package modelo;

//classe filho
public class Gato extends Animal {

	int qtdDeVidas = 7;

	public Gato(int qtdDeVidas, String especie, String nome, float peso, String raca) {
		super(especie, nome, peso, raca);
		this.qtdDeVidas = qtdDeVidas;

	}

	@Override
	public String toString() {
		System.out.println("\nqtd de vidas");
		return qtdDeVidas + "\t" + super.toString();
	}

}
