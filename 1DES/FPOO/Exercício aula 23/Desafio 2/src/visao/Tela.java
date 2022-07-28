package visao;

import controle.ProcessaPlanilha;

public class Tela {

	public static void main(String[] args) {

		ProcessaPlanilha.carregar();
		System.out.println("Medias calculadas com sucesso!");
		ProcessaPlanilha.enviar(1);
	}
}
