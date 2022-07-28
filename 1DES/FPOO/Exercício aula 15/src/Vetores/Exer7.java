package Vetores;

import java.util.Scanner;

public class Exer7 {
	Scanner scan = new Scanner(System.in);
		
	System.out.println("Digite um n�mero inteiro para o tamanho do vetor1");
	int valor1 = scan.nextInt();
	
	System.out.println("Digite um n�mero inteiro para o tamanho do vetor2");
	int valor2 = scan.nextInt();

	
	int vetor1[] = new int[valor1]; 
	int vetor2[] = new int[valor2];
	
	for (int i = 0; i < vetor1.length; i++) {
		
	
	System.out.println("Digite um n�mero");
	vetor1[i] = scan.nextInt();
	}
	for (int i = 0; i < vetor2.length; i++) {
		
		System.out.println("Digite um n�mero");
		vetor2[i] = scan.nextInt();
 
	}
 
 
		if(Arrays.equals(vetor1,vetor2)){
			System.out.println("vetor1  e vetor2 iguais");
		}else{
			System.out.print("vetor1  e vetor2 diferentes");
		}

}
}
