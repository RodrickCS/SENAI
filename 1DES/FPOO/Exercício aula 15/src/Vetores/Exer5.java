package Vetores;

import java.util.Scanner;

public class Exer5 {
	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		int[] val1 = new int[20];
		int[] val2 = new int[val1.length];
		int[] val3 = new int[val1.length];
		int[] val4 = new int[val1.length];
		int[] val5 = new int[val1.length];

		for (int i = 0; i < val1.length; i++) {
			System.out.println("Digite o valor da posi??o: " + i);
			val1[i] = scan.nextInt();

		}
		for (int i = 0; i < val2.length; i++) {
			System.out.println("Digite o valor da posi??o: " + i);
			val2[i] = scan.nextInt();

		}
		for (int i = 0; i < val3.length; i++) {
			val3[i] = val1[i] - val2[1];

		}
		for (int i = 0; i < val4.length; i++) {
			val4[i] = val1[i] + val2[1];
		}

		for (int i = 0; i < val5.length; i++) {
			val5[i] = val1[i] * val2[1];

		}
		System.out.print("Primeiro vetor = ");
		for (int i = 0; i < val1.length; i++) {
			System.out.print(val1[i] + " ");
		}

		System.out.println();
		System.out.print("segundo vetor = ");
		for (int i = 0; i < val2.length; i++) {
			System.out.print(val2[i] + " ");

		}

		System.out.println();
		System.out.print("terceiro vetor = ");
		for (int i = 0; i < val3.length; i++) {
			System.out.print(val3[i] + " ");
		}

		System.out.println();
		System.out.print("Quarto vetor = ");
		for (int i = 0; i < val4.length; i++) {
			System.out.print(val4[i] + " ");
		}

		System.out.println();
		System.out.print("Quinto vetor = ");
		for (int i = 0; i < val5.length; i++) {
			System.out.print(val5[i] + " ");
		}
	}
}