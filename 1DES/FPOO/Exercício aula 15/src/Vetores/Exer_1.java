package Vetores;

import java.util.Scanner;

public class Exer_1 {
	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		int[] val = new int[10];

		for (int i = 0; i < val.length; i++) {

			System.out.println("Informe um valor");
			val[i] = scan.nextInt();

		}
		for (int i = 0; i < val.length; i++) {
			System.out.print(val[i] + " ");
		}

		System.out.println();

		for (int j = val.length - 1; j >= 0; j--) {
			System.out.print(val[j] + " ");
		}
	}
}