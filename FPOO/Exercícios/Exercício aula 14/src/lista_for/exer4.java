package lista_for;

import java.util.Scanner;

public class exer4 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Informe o valor a ser calculado : ");
		int val = scan.nextInt();

		int fat = 1;

		for (int i = val; i >= 1; i--) {
			//fat = fat * i;
			 fat *= i;
		}

		System.out.println(fat);
	}

}