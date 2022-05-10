package main;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
	static BufferedReader br;
	static String entrada = "F:\\SENAI\\FPOO\\Exerc�cio aula 23\\Desafio 3\\src\\main\\entrada.txt";

	public static void main(String[] args) {
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha;
			while ((linha = br.readLine()) != null) {
				String[] numeros = linha.split("-");
				int v1 = Integer.parseInt(numeros[0]);
				int v2 = Integer.parseInt(numeros[1]);
				int v3 = Integer.parseInt(numeros[2]);
				int v4 = Integer.parseInt(numeros[3]);
				int v5 = Integer.parseInt(numeros[4]);
				int v6 = Integer.parseInt(numeros[5]);
				int v7 = Integer.parseInt(numeros[6]);
				int v8 = Integer.parseInt(numeros[7]);
				int v9 = Integer.parseInt(numeros[8]);
				int v10 = Integer.parseInt(numeros[9]);
				int v11 = Integer.parseInt(numeros[10]);
				int v12 = Integer.parseInt(numeros[11]);
				int v13 = Integer.parseInt(numeros[12]);
				int v14 = Integer.parseInt(numeros[13]);
				int v15 = Integer.parseInt(numeros[14]);
				int v16 = Integer.parseInt(numeros[15]);
				int v17 = Integer.parseInt(numeros[16]);
				int v18 = Integer.parseInt(numeros[17]);
				int v19 = Integer.parseInt(numeros[18]);
				int v20 = Integer.parseInt(numeros[19]);
				int[] ordem = { v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19,
						v20 };
				Arrays.sort(ordem);
				for (int l : ordem) {
					System.out.print(l + "-");
					linha = br.readLine();
				}
			}
			br.close();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}