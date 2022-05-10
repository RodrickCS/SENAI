package visao;

import java.awt.EventQueue;
import java.awt.Event.*;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JTextField;

import controle.DespesaProcess;
import modelo.Cadastro;

import javax.swing.JButton;
import javax.swing.JTextArea;
import java.awt.Color;
import java.awt.Button;
import java.awt.Scrollbar;

public class Menu {

	private JFrame frmMenu;
	private JTextField textField;
	private JTextField textField_1;
	private JTextField textField_2;
	private JTextField textField_3;
	private JTextField textField_4;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Menu window = new Menu();
					window.frmMenu.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public Menu() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frmMenu = new JFrame();
		frmMenu.setTitle("Menu");
		frmMenu.getContentPane().setBackground(new Color(255, 255, 204));
		frmMenu.setBounds(100, 100, 450, 322);
		frmMenu.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmMenu.getContentPane().setLayout(null);

		JLabel lblNewLabel = new JLabel("Funcionario");
		lblNewLabel.setBounds(10, 11, 64, 14);
		frmMenu.getContentPane().add(lblNewLabel);

		JLabel lblNewLabel_1 = new JLabel("Data");
		lblNewLabel_1.setBounds(10, 36, 46, 14);
		frmMenu.getContentPane().add(lblNewLabel_1);

		JLabel lblNewLabel_1_1 = new JLabel("Evento");
		lblNewLabel_1_1.setBounds(10, 61, 46, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_1);

		JLabel lblNewLabel_1_2 = new JLabel("Despesas");
		lblNewLabel_1_2.setBounds(10, 86, 46, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_2);

		JLabel lblNewLabel_1_3 = new JLabel("Valor total");
		lblNewLabel_1_3.setBounds(10, 111, 64, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_3);

		textField = new JTextField();
		textField.setBounds(74, 8, 86, 20);
		frmMenu.getContentPane().add(textField);
		textField.setColumns(10);

		textField_1 = new JTextField();
		textField_1.setColumns(10);
		textField_1.setBounds(48, 36, 86, 20);
		frmMenu.getContentPane().add(textField_1);

		textField_2 = new JTextField();
		textField_2.setColumns(10);
		textField_2.setBounds(48, 61, 86, 20);
		frmMenu.getContentPane().add(textField_2);

		textField_3 = new JTextField();
		textField_3.setColumns(10);
		textField_3.setBounds(66, 83, 86, 20);
		frmMenu.getContentPane().add(textField_3);

		textField_4 = new JTextField();
		textField_4.setColumns(10);
		textField_4.setBounds(66, 108, 86, 20);
		frmMenu.getContentPane().add(textField_4);

		Button button = new Button("Cadastrar");
		button.setBounds(320, 28, 70, 22);
		frmMenu.getContentPane().add(button);

		Button button_1 = new Button("Alterar");
		button_1.setBounds(320, 53, 70, 22);
		frmMenu.getContentPane().add(button_1);

		Button button_2 = new Button("Excluir");
		button_2.setBounds(320, 78, 70, 22);
		frmMenu.getContentPane().add(button_2);

		JTextArea textArea = new JTextArea();
		textArea.setBounds(27, 149, 379, 123);
		frmMenu.getContentPane().add(textArea);

		Scrollbar scrollbar = new Scrollbar();
		scrollbar.setBounds(389, 149, 17, 123);
		frmMenu.getContentPane().add(scrollbar);

	}

	private void cadastrar() {
		if (textField.getText().length() != 0 && textField_1.getText().length() != 0
				&& textField_3.getText().length() != 0 && textField_4.getText().length() != 0) {
			DespesaProcess.des.add(new Cadastro())
		}
	}

}
