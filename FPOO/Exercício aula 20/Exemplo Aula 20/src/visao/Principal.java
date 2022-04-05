package visao;

import modelo.Cao;
import modelo.Gato;

import java.util.ArrayList;
import java.util.Scanner;

public class Principal {

	static ArrayList<Cao> Caes = new ArrayList<>();
	static ArrayList<Gato> Gatos = new ArrayList<>();

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		int menu = 0;
		while (menu != 5) {
			System.out.println("-------------------");
			System.out.println("Selecione uma op��o");
			System.out.println("-------------------");
			System.out.println("1.Cadastrar Cao\n2.Cadastrar Gato\n3.Listar Gatos\n4.Listar Cao\n5.Sair");
			menu = scan.nextInt();
			switch (menu) {

			case 1:
				cadastrarCao();
				break;
			case 2:
				cadastrarGato();
				break;
			case 3:
				listarGato();
				break;
			case 4:
				listarCachorro();
				break;
			case 5:
				System.out.println("Adeus");
				break;
			default:
				System.out.println("Op��o inv�lida");
				break;
			}
		}

	}

	private static void listarCachorro() {
		for (Cao c : Caes) {
			System.out.println(c.toString());
		}
	}

	private static void listarGato() {
		for (Gato g : Gatos) {
			System.out.println(g.toString());
		}
	}

	public static void cadastrarCao() {
		System.out.println("quantidades de motoqueiros atacados\tespecie\tnome\tpeso\traca");
		Cao cao = new Cao(scan.nextInt(), scan.next(), scan.next(), scan.nextFloat(), scan.next());
		Caes.add(cao);
		System.out.println("Cadastrado com sucesso");	

	}

	public static void cadastrarGato() {
		System.out.println("quantidade de vidas\tespecie\tnome\tpeso\traca");
		Gato gato = new Gato(scan.nextInt(), scan.next(), scan.next(), scan.nextFloat(), scan.next());
		Gatos.add(gato);
		System.out.println("Cadastrado com sucesso");

	}

}
