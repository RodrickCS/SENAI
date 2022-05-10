package controle;

import java.io.*;
import java.util.ArrayList;

import modelo.Usuario;

public class UsuarioDAO {
	BufferedReader br;
	private String path = "F:\\SENAI\\FPOO\\Exercício aula 23\\Desafio 4\\dados\\usuarios.csv";

	public ArrayList<Usuario> abrir() {
		ArrayList<Usuario> lista = new ArrayList<>();
		Usuario usuario;
		try {
			br = new BufferedReader(new FileReader(path));
			br.readLine();
			String linha = br.readLine();
			while (linha != null) {
				usuario = new Usuario(linha);
				lista.add(usuario);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e.toString());
		} catch (IOException e) {
			System.out.println(e.toString());
		}
		return lista;

	}
}
