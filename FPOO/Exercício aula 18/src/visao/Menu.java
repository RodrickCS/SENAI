package visao;

import java.util.Scanner;

import modelo.Prato;

public class Menu {
	static Scanner scan = new Scanner(System.in);
	static Prato prato[] = new Prato[10];
	static int indice = 0;

	public static void main(String[] args) {

		int menu = 0;
		while (menu != 3) {
			System.out.println("Selecione uma opção");
			System.out.println("1.Cadastrar Pratos\n2.Listar Pratos\n3.Sair");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				cadastrarPratos();
				break;
			case 2:
				listarPratos();
				break;
			case 3:
				System.out.println("Adeus");
				break;
			default:
				System.out.println("Opção inválida");
				break;
			}
		}

	}

	public static void cadastrarPratos() {
		
		System.out.println("Código\t Tipo\tNome\tDescrição\tPreço");
		prato[indice] = new Prato();
		prato[indice].codPrato = scan.nextInt();
		prato[indice].tipo = scan.next();
		prato[indice].Nome = scan.next();
		prato[indice].Descricao = scan.next();
		prato[indice].preco = scan.nextFloat();
		indice++;
	}

	public static void listarPratos() {
		System.out.println("Có1digo\tTipo\tNome\tDescrição\tPreço");
		for (int i = 0; i < indice; i++) {
			System.out.println(prato[i].paraString());
		}
	}

}
