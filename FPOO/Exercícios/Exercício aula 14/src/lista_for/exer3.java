package lista_for;

import java.util.Scanner;

public class exer3 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int maior = 0, menor = 0, val;

		for (int i = 0; i < 10; i++) {
			System.out.println("Informe um valor qualquer:");
			val = scan.nextInt();

			if (i == 0) {
				maior = val;
				menor = val;
			} else {
				if (val > maior)
					maior = val;
				if (val < menor)
					menor = val;
			}
		}

		System.out.println("Maior = " + maior);
		System.out.println("\nMenor = " + menor);

	}

}
