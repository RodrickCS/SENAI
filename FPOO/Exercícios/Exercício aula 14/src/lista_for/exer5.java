package lista_for;

import java.util.Scanner;

public class exer5 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Informe o valor da copia : ");
		float val = scan.nextFloat();

		int cont = 0;

		for (int i = 1; i <= 200; i++) {
			System.out.printf("%d = %.2f\t", i, (val * i));
			cont++;
			if (cont == 10) {
				cont = 0;
				System.out.println();
			}
		}

	}
}