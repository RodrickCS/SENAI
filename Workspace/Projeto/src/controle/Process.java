package controle;

import java.util.ArrayList;

import modelo.Funcionario;


public class Process {

	
	public static ArrayList<Funcionario> funi = new ArrayList<>();
	private static DAO d = new DAO();
	
	public static void abrir() {
		funi  = d.ler();
	}
	
	public static void salvar() {
		d.escrever(funi);
	}
	
	public static void carregar() {
		// Limpar a lista
		funi = new ArrayList<>();
		// Preencher com testes
		 
	}
	
}