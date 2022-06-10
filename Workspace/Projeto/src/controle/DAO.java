package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Funcionario;


public class DAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "C:\\Users\\Usuario 10\\Desktop\\1DES\\Fpoo\\JF\\Tela\\Dados\\arquivos.csv";

	public ArrayList<Funcionario> ler() {
		ArrayList<Funcionario> linhas = new ArrayList<>();
		Funcionario p;
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = br.readLine();
			while (linha != null) {
				p = new Funcionario(linha);
				linhas.add(p);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
	}

	public void escrever(ArrayList<Funcionario> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for (Funcionario m : linhas) {
				bw.write(m.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}