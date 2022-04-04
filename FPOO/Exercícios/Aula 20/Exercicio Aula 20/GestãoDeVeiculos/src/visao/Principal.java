package visao;

import modelo.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Principal {

	static ArrayList<Moto> motos = new ArrayList<>();
	 static ArrayList<Carro> carros = new ArrayList<>();
	
	public static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		int menu = 0;
		while (menu != 5) {
			System.out.println("Digite uma opção");
			System.out.println("1.Cadastrar Carro\n2.Cadastrar moto\n3.Listar carros\n4.Listar motos\n5.Sair");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				cadastrarCarro();
				break;
			case 2:
				cadastrarMoto();
				break;
			case 3:
				listarCarros();
				break;
			case 4:
				listarMotos();
				break;
			case 5:
				System.out.println("falow");
				break;
			default:
				System.out.println("opção inválida");
				break;
			}

		}

	}

	private static void cadastrarCarro() {
		System.out.println("Tipo\tCapacidade de passageiros\tPlaca\tAno do modelo\tAno de fabricação\tModelo\tMarca\tValor");
		Carro carro = new Carro(scan.next(),scan.nextInt(),scan.next(),scan.nextInt(),scan.nextInt(),scan.next(),scan.next(),scan.nextDouble());
		carros.add(carro);
		System.out.println("Cadastrado com sucesso");
		System.out.println("----------------------");
	}

	private static void cadastrarMoto() {
		System.out.println("Cilindradas\tPlaca\tAno do modelo\tAno de fabricação\tModelo\tMarca\tValor ");
		Moto moto = new Moto(scan.nextInt(),scan.next(),scan.nextInt(),scan.nextInt(),scan.next(),scan.next(),scan.nextDouble());
		motos.add(moto);
		System.out.println("Cadastrado com sucesso");
		System.out.println("----------------------");
		

	}

	private static void listarCarros() {
		for(Carro c : carros) {
			System.out.println(c.toString());
		}

	}

	private static void listarMotos() {
		for(Moto m : motos) {
			System.out.println(m.toString());
		}

	}

}
