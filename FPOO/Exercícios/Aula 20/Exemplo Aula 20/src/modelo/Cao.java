package modelo;

//classe filho
public class Cao extends Animal {

	int qtdMotoqueirosAtacados;

	public Cao(int qtdMotoqueirosAtacados, String especie, String nome, float peso, String raca) {
		super(especie, nome, peso, raca);
		this.qtdMotoqueirosAtacados = qtdMotoqueirosAtacados;

	}

	@Override
	public String toString() {
		System.out.println("qtd de motoqueiros atacados");
		return qtdMotoqueirosAtacados + "\t" + super.toString();

	}

}
