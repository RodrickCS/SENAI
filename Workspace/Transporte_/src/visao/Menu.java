package visao;

import java.util.Scanner;

public class Menu {

	Scanner s = new Scanner(System.in);
	public static Veiculo veiculos[] = new Veiculo[10];
	public static int indice = 0;
public static String itens[] = {"Cadastrar veiculo","Listar veiculos","Sair"};

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int menu = 0;
		while (menu != 2) {
			menu = printMenu(itens);
			System.out.println("Digite uma opção");
	
			switch (menu) {
			case 1:
				cadastrarVeiculos();
				break;
			case 2:
				listarVeiculos();
				break;
			}
		}
	}

	public static int printMenu(String[] itens) {
		Scanner s = new Scanner(System.in);
		for (int i = 0; i < itens.length; i++)
			System.out.println((i + 1) + "." + itens[i]);
		System.out.println("Escolha uma opção");
		return s.nextInt();

	}

	public static void cadastrarVeiculos() {
		Scanner s = new Scanner(System.in);
		System.out.println("Placa\tMarca\tModelo\tAno Modelo\tAno Fabricação\tCor");
		Veiculo[indice] = new Veiculo(s.next(),s.next(), s.next(), s.next(), s.next(),s.next());
		indice++;
		
	}
	public static void listarVeiculos() {
		for (int i = 0; i < indice; i++) {
			System.out.println(Veiculo[i].paraString());
		}
	}
}
