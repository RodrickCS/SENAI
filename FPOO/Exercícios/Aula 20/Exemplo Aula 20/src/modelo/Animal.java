package modelo;

//classe pai
public class Animal {

	public String especie;
	public String nome;
	public float peso;
	public String raca;

	public Animal(String especie, String nome, float peso, String raca) {

		this.especie = especie;
		this.nome = nome;
		this.peso = peso;
		this.raca = raca;
	}

	@Override
	public String toString() {
		System.out.println("\tespecie\tnome\tpeso\traca");
		return especie + "\t" + nome + "\t" + peso + "kg" + "\t" + raca;
	}

}
