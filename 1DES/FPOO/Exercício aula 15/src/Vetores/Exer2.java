package Vetores;

import java.util.Scanner;

public class Exer2 {
	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		int[] val1 = new int[10];
		int[] val2 = new int[val1.length];

		for (int i = 0; i < val1.length; i++) {

			System.out.println("Informe um valor");
			val1[i] = scan.nextInt();
			val2[i] = val1[i];

		}
		for (int i = 0; i < val1.length; i++) {
			System.out.print(val1[i] + " ");
		}
		System.out.println();

		for (int i = val2.length - 1; i >= 0; i--) {
			System.out.print(val2[i] + " ");
		}

	}
}
