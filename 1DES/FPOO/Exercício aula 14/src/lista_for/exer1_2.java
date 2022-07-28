package lista_for;

import java.util.Scanner;

public class exer1_2 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Informe o inicio do intervalo : ");
		int inicio = scan.nextInt();

		System.out.println("Informe o fim do intervalo : ");
		int fim = scan.nextInt();

		//par
		if (inicio % 2 != 0)
			inicio++;
		//impar
		// if(inicio%2 == 0) inicio++;

		for (int i = inicio; i <= fim; i += 2) {
			System.out.println(i);
		}
	}

}
