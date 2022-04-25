package desafio;

import java.util.ArrayList;
import java.util.Scanner;
import desafio.*;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Arquivo arq = new Arquivo();

		int opcao = 0;

		do {
			System.out.println("Insira uma opção");
			System.out.println("1.Soma\n2.Sub\n3.Multi\n4.Divisão\n5.Sair");
			opcao = scan.nextInt();

			switch (opcao) {
			case 1:

				String info = "";

				arq.escrever(info, "Desafio", true);

				ArrayList<String> Soma = arq.ler("Desafio");

				for (String linha : Soma) {
					String[] temp = linha.split(";");
					int numero1 = Integer.parseInt(temp[0]);
					int numero2 = Integer.parseInt(temp[1]);
					int soma = numero1 + numero2;
					System.out.println(soma);
				}
				break;
			case 2:
				info = "";

				arq.escrever(info, "Desafio", true);

				ArrayList<String> Sub = arq.ler("Desafio");

				for (String linha : Sub) {
					String[] temp = linha.split(";");
					int numero1 = Integer.parseInt(temp[0]);
					int numero2 = Integer.parseInt(temp[1]);
					int sub = numero1 - numero2;
					System.out.println(sub);
				}
				break;
			case 3:
				info = "";

				arq.escrever(info, "Desafio", true);

				ArrayList<String> Multi = arq.ler("Desafio");

				for (String linha : Multi) {
					String[] temp = linha.split(";");
					int numero1 = Integer.parseInt(temp[0]);
					int numero2 = Integer.parseInt(temp[1]);
					int multi = numero1 * numero2;
					System.out.println(multi);
				}
				break;
			case 4:
				info = "";

				arq.escrever(info, "Desafio", true);

				ArrayList<String> Divi = arq.ler("Desafio");

				for (String linha : Divi) {
					String[] temp = linha.split(";");
					int numero1 = Integer.parseInt(temp[0]);
					int numero2 = Integer.parseInt(temp[1]);
					int divi = numero1 / numero2;
					System.out.println(divi);
				}
				break;
			case 5:
				System.out.println("falow");
				break;
			default:
				System.out.println("Opção Inválida");
				break;
			}
		} while (opcao != 5);

	}

}
