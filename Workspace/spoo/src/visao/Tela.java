package visao;

import java.util.Scanner;

import Controle.ProcessaPlanilha;

public class Tela {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		ProcessaPlanilha.carregar();
		int menu = 0;
		while (menu != 5) {
			System.out.println("1. Adi��o");
			System.out.println("2. Subtra��o");
			System.out.println("3. Multiplica��o");
			System.out.println("4. Divis�o");
			System.out.println("5. Sair");
			menu = scan.nextInt();
			ProcessaPlanilha.enviar(menu);
		}

	}

}
