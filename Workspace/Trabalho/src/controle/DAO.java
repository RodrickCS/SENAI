package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import modelo.Cadastro;

public class DAO {

	BufferedReader br;
	BufferedWriter bw;
	private String path = "E:\\SENAI\\WorkSpace\\Trabalho\\Dados\\Trabalho.csv";

	public ArrayList<Cadastro> ler() {
		ArrayList<Cadastro> linhas = new ArrayList<>();
		Cadastro p;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while (linha != null) {
				p = new Cadastro(linha);
				linhas.add(p);
				linha = br.readLine();
			}
			br.close();

		} catch (Exception e) {

		}

		return linhas;

	}

	public void escrever(ArrayList<Cadastro> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Cadastro p : linhas) {
				bw.write(p.toCSV());
			}
			bw.close();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
