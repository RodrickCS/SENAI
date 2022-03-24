package Vetores;

import java.util.Scanner;

public class Exer3 {
	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		int[] val1 = new int[10];
		int[] val2 = new int[val1.length];

		for (int i = 0; i < val1.length; i++) {

			System.out.println("Informe um valor");
			val1[i] = scan.nextInt();

			if (val1[i] % 2 == 0) {
				val2[i] = val1[i] / 2;
			} else {
				val2[i] = val1[i] * 3;
			}

		}
		for (int i = 0; i < val1.length; i++) {
			System.out.print(val1[i] + " ");
		}
		System.out.println();

		for (int i = 0; i < val2.length; i++) {
			System.out.print(val2[i] + " ");
		}

	}
}
