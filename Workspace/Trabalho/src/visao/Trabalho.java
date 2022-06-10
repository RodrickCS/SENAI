package visao;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JTextArea;
import java.awt.Button;
import java.awt.Color;
import java.awt.Font;
import javax.swing.JScrollBar;

public class Trabalho {

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
					Trabalho window = new Trabalho();
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
	public Trabalho() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frmMenu = new JFrame();
		frmMenu.getContentPane().setBackground(new Color(255, 255, 204));
		frmMenu.setTitle("Menu");
		frmMenu.setBounds(100, 100, 613, 414);
		frmMenu.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmMenu.getContentPane().setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Nome");
		lblNewLabel.setFont(new Font("Tahoma", Font.PLAIN, 13));
		lblNewLabel.setBounds(10, 87, 68, 14);
		frmMenu.getContentPane().add(lblNewLabel);
		
		textField = new JTextField();
		textField.setBounds(88, 81, 121, 20);
		frmMenu.getContentPane().add(textField);
		textField.setColumns(10);
		
		JLabel lblNewLabel_1 = new JLabel("Data");
		lblNewLabel_1.setFont(new Font("Tahoma", Font.PLAIN, 13));
		lblNewLabel_1.setBounds(10, 112, 46, 14);
		frmMenu.getContentPane().add(lblNewLabel_1);
		
		JLabel lblNewLabel_1_1 = new JLabel("Evento");
		lblNewLabel_1_1.setFont(new Font("Tahoma", Font.PLAIN, 13));
		lblNewLabel_1_1.setBounds(10, 137, 46, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_1);
		
		JLabel lblNewLabel_1_2 = new JLabel("Despesas");
		lblNewLabel_1_2.setFont(new Font("Tahoma", Font.PLAIN, 13));
		lblNewLabel_1_2.setBounds(10, 162, 68, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_2);
		
		JLabel lblNewLabel_1_3 = new JLabel("Valor");
		lblNewLabel_1_3.setFont(new Font("Tahoma", Font.PLAIN, 13));
		lblNewLabel_1_3.setBounds(10, 187, 68, 14);
		frmMenu.getContentPane().add(lblNewLabel_1_3);
		
		textField_1 = new JTextField();
		textField_1.setColumns(10);
		textField_1.setBounds(88, 106, 121, 20);
		frmMenu.getContentPane().add(textField_1);
		
		textField_2 = new JTextField();
		textField_2.setColumns(10);
		textField_2.setBounds(88, 160, 121, 20);
		frmMenu.getContentPane().add(textField_2);
		
		textField_3 = new JTextField();
		textField_3.setColumns(10);
		textField_3.setBounds(88, 185, 121, 20);
		frmMenu.getContentPane().add(textField_3);
		
		textField_4 = new JTextField();
		textField_4.setColumns(10);
		textField_4.setBounds(88, 135, 121, 20);
		frmMenu.getContentPane().add(textField_4);
		
		JTextArea textArea = new JTextArea();
		textArea.setBounds(268, 205, 319, 159);
		frmMenu.getContentPane().add(textArea);
		
		Button button = new Button("Enviar");
		button.setBounds(298, 56, 70, 22);
		frmMenu.getContentPane().add(button);
		
		Button button_1 = new Button("Dashboard");
		button_1.setBounds(374, 56, 70, 22);
		frmMenu.getContentPane().add(button_1);
		
		Button button_2 = new Button("Excluir");
		button_2.setBounds(450, 56, 70, 22);
		frmMenu.getContentPane().add(button_2);
		
		JScrollBar scrollBar = new JScrollBar();
		scrollBar.setBounds(570, 205, 17, 159);
		frmMenu.getContentPane().add(scrollBar);
		
	}
}

