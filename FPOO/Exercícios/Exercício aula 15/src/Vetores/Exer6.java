package Vetores;

import java.util.Scanner;

public class Exer6 {

	public static void main(String[] args) {

		int[] numeros = new int[5];

		Scanner scan = new Scanner(System.in);

		System.out.println("Digite um número inteiro para o tamanho do vetor:");

		int valor = scan.nextInt();

		int[] vetor = new int[valor];
		int[] vetor2 = new int[vetor.length];
		int[] vetor3 = new int[vetor.length];

		for (int i = 0; i < vetor.length; i++) {

			System.out.println("Digite um número: ");
			vetor[i] = scan.nextInt();

			if (vetor[i] % 2 == 0) {
				vetor3[i] = vetor[i];
			} else {
				vetor2[i] = vetor[i];
			}
		}
		System.out.print("Pares = ");
		for (int i = 0; i < vetor3.length; i++) {
			System.out.print(vetor3[i] + " ");
		}
		System.out.println();

		System.out.print("Impares = ");
		for (int i = 0; i < vetor2.length; i++) {
			System.out.print(vetor2[i] + " ");
		}
		System.out.println();

		scan.close();
	}

}