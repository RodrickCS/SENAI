package visão;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import controle.ProcessaPlanilha;

public class TelaUsuario extends JFrame {

	private static final long serialVersionUID = 1L;

	private JLabel rotulo;
	private JPanel painel;

	TelaUsuario() {

		setTitle("Idades calculadas");
		setBounds(200, 200, 600, 300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);

		rotulo = new JLabel("IDADES CALCULADAS COM SUCESSO!");
		rotulo.setBounds(30, 30, 400, 100);

		painel.add(rotulo);

	}

	public static void main(String[] args) {
		ProcessaPlanilha.carregar();
		TelaUsuario tela = new TelaUsuario();
		tela.setVisible(true);
	}
}
