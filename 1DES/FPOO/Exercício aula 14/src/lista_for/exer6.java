package lista_for;

import java.util.Scanner;

public class exer6 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Informe o inicio da sequencia : ");
		int inicio = scan.nextInt();

		System.out.println("Informe o fim da sequencia : ");
		int fim = scan.nextInt();

		int somapar = 0, somaimpar = 0;

		for (int i = inicio; i <= fim; i++) {
			if (i % 2 == 0) {
				somapar += i;
			} else {
				somaimpar += i;
			}
		}

		System.out.println("Soma dos pares = " + somapar);
		System.out.println("Soma dos impares = " + somaimpar);

	}

}