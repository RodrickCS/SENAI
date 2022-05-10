package main;

import java.awt.*;
import javax.swing.*;
import main.*;

public class TelaUsuario extends JFrame {

	private static final long serialVersionUID = 1L;

	private JPanel painel;
	private JLabel rotulo, numeros;
	
	TelaUsuario(){
		
		setTitle("Numeros em Ordem Crescente");
		setBounds(0,0,500,300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		rotulo = new JLabel("NÚMEROS EM ORDEM CRESCENTE");
		rotulo.setBounds(30,30,500,110);
		numeros = new JLabel();
		
		painel.add(rotulo);
	}
	public static void main(String[] args) {
		TelaUsuario tela = new TelaUsuario();
		tela.setVisible(true);
	}
}
