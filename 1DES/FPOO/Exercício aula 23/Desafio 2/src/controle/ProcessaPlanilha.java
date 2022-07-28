package controle;

import java.util.ArrayList;

import modelo.*;

public class ProcessaPlanilha {

	public static ArrayList<Planilha> linhas = new ArrayList<>();
	private static DAO dao = new DAO();

	public static void carregar() {
		linhas = dao.abrir();
	}

	public static void enviar(int opcao) {

		dao.salvarMedia(linhas);
	}
}
