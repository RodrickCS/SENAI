package visao;

import java.text.ParseException;

import java.util.Scanner;

import modelo.Aparelho;

public class menu {

	private static Scanner scan = new Scanner(System.in);
	private static Aparelho aparelhos[] = new Aparelho[10];
	private static int quantos = 0;

	public static void main(String[] args) throws ParseException {

		int menu = 0;
		while (menu != 3) {
			System.out.println("1.Cadastrar\n2.Listar\n3.Sair");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				cadastrar();
				break;
			case 2:
				listar();
				break;
			case 3:
				System.out.println("Adeus!");
				break;
			default:
				System.out.println("Op��o inv�lida");
				break;
			}
		}
	}

	private static void cadastrar() throws ParseException {
		System.out.println("Nome Aparelho\tTipo Exerc�cio\tGrupo Muscular\tData Compra\tValor Aquisi��o:");
		aparelhos[quantos] = new Aparelho(scan.next(), scan.next(), scan.next(), scan.next(), scan.nextDouble());
		
		System.out.println("Digite o tempo de deprecia��o:");
		aparelhos[quantos].setTempoDepreciacao(scan.nextInt());
		quantos++; // Acumulador
	}

	private static void listar() {
		System.out.println("Nome Aparelho\tTipo Exerc�cio\tGrupo Muscular\tData Compra\tValor Aquisi��o\tTempo de Uso\tDeprecia��o\tValor Depreciado:");
		for (int i = 0; i < quantos; i++) {
			System.out.println(aparelhos[i].toString());
		}
	}

}
