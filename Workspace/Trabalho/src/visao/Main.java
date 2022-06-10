package visao;

import javax.swing.*;

import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.ParseException;
import javax.swing.table.DefaultTableModel;
import controle.DespesaProcess;
import modelo.Orcamento;

public class Main extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	private JPanel painel;
	private JLabel id, funcionario, data, Servicos, despesas, imagem;
	private JTextField tfid, tfFuncionario, tfData, tfServicos, tfDespesas;
	private JTable table;
	private JButton btEnviar, btExcluir, btBuscar, btAlterar, btCancelar;
	private JScrollPane rolagem;
	private DefaultTableModel tableModel;
	private String imgIco = "F:\\SENAI\\WorkSpace\\Trabalho\\imagens\\fun.png";
	private ImageIcon icon;
	private JComboBox<String> cbfuncao;
	private String[] imagens = { "F:\\SENAI\\WorkSpace\\Trabalho\\imagens\\Katia.png",
			"F:\\SENAI\\WorkSpace\\Trabalho\\imagens\\Maria.png",
			"F:\\SENAI\\WorkSpace\\Trabalho\\imagens\\Silva.png" };
	private int autoId = DespesaProcess.des.size() + 1;

	Main() {

		setTitle("Salão");
		setBounds(100, 100, 800, 600);
		painel = new JPanel();
		setIconImage(new ImageIcon(imgIco).getImage());
		painel.setBackground(new Color(255, 255, 204));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		id = new JLabel("id");
		id.setBounds(20, 10, 500, 20);
		painel.add(id);

		funcionario = new JLabel("Funcionário");
		funcionario.setBounds(20, 40, 500, 20);
		painel.add(funcionario);
		funcionario.setFont(new Font("Arial", Font.PLAIN, 15));

		data = new JLabel("Data");
		data.setBounds(20, 80, 500, 20);
		painel.add(data);
		data.setFont(new Font("Arial", Font.PLAIN, 15));

		Servicos = new JLabel("Serviço");
		Servicos.setBounds(20, 120, 500, 20);
		painel.add(Servicos);
		Servicos.setFont(new Font("Arial", Font.PLAIN, 15));

		despesas = new JLabel("Valor");
		despesas.setBounds(20, 160, 500, 20);
		painel.add(despesas);
		despesas.setFont(new Font("Arial", Font.PLAIN, 15));

		cbfuncao = new JComboBox<String>(new String[] { "Cabeleleira", "Designer/sobrancelhas", "Unhas" });
		cbfuncao.setBounds(160, 107, 125, 25);
		painel.add(cbfuncao);

		table = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("id");
		tableModel.addColumn("Funcionário");
		tableModel.addColumn("Data");
		tableModel.addColumn("Serviço");
		tableModel.addColumn("Valor");
		preencherTabela();
		table = new JTable(tableModel);
		rolagem = new JScrollPane(table);
		rolagem.setBounds(20, 310, 740, 230);
		painel.add(rolagem);

		table.addMouseListener(new MouseAdapter() {
			public void mouseClicked(MouseEvent e) {
				int lin = table.getSelectedRow();
				tfid.setText(tableModel.getValueAt(lin, 0).toString());
				tfFuncionario.setText(tableModel.getValueAt(lin, 1).toString());
				tfData.setText(tableModel.getValueAt(lin, 2).toString());
				tfServicos.setText(tableModel.getValueAt(lin, 3).toString());
				tfDespesas.setText(tableModel.getValueAt(lin, 4).toString());
				btEnviar.setEnabled(false);
				btBuscar.setEnabled(false);
				btExcluir.setEnabled(true);
				btAlterar.setEnabled(true);
				btCancelar.setVisible(true);

			}
		});

		tfid = new JTextField(String.format("%d", autoId));
		tfid.setBounds(100, 10, 200, 20);
		painel.add(tfid);
		tfid.setEditable(false);

		tfFuncionario = new JTextField();
		tfFuncionario.setBounds(100, 40, 200, 25);
		painel.add(tfFuncionario);

		tfData = new JTextField();
		tfData.setBounds(100, 80, 200, 25);
		painel.add(tfData);

		tfServicos = new JTextField();
		tfServicos.setBounds(100, 120, 200, 25);
		painel.add(tfServicos);

		tfDespesas = new JTextField();
		tfDespesas.setBounds(100, 160, 200, 25);
		painel.add(tfDespesas);

		btEnviar = new JButton("Enviar");
		btEnviar.setBounds(400, 20, 100, 20);
		painel.add(btEnviar);

		btExcluir = new JButton("Excluir");
		btExcluir.setBounds(505, 20, 100, 20);
		painel.add(btExcluir);
		btExcluir.setEnabled(false);

		btBuscar = new JButton("Buscar");
		btBuscar.setBounds(610, 20, 100, 20);
		painel.add(btBuscar);

		btAlterar = new JButton("Alterar");
		btAlterar.setBounds(505, 50, 100, 20);
		painel.add(btAlterar);
		btAlterar.setEnabled(false);

		btCancelar = new JButton("Cancelar");
		btCancelar.setBounds(610, 50, 100, 20);
		painel.add(btCancelar);
		btCancelar.setVisible(false);

		imagem = new JLabel();
		imagem.setBounds(330, 115, 250, 150);
		imagem.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.red));
		alterarImagens(0);
		painel.add(imagem);

		btEnviar.addActionListener(this);
		btExcluir.addActionListener(this);
		btBuscar.addActionListener(this);
		btAlterar.addActionListener(this);
		btCancelar.addActionListener(this);

	}

	private void enviar() {
		if (tfFuncionario.getText().length() != 0 && tfData.getText().length() != 0
				&& tfServicos.getText().length() != 0 && tfDespesas.getText().length() != 0) {

			DespesaProcess.des.add(new Orcamento(autoId, tfFuncionario.getText(), tfData.getText(),
					tfServicos.getText(), tfDespesas.getText()));
			autoId++;
			preencherTabela();
			limparCampos();

		} else {
			JOptionPane.showMessageDialog(this, "Preencha todos os campos");
		}

	}

	private void alterarImagens(int indice) {
		icon = new ImageIcon(new ImageIcon(imagens[indice]).getImage().getScaledInstance(250, 180, 100));
		imagem.setIcon(icon);
	}

	private void excluir() {

		int id = Integer.parseInt(tfid.getText());
		Orcamento cadastro = new Orcamento(id);
		int indice = DespesaProcess.des.indexOf(cadastro);
		DespesaProcess.des.remove(indice);
		preencherTabela();
		limparCampos();
		tfid.setText(String.format("%d", autoId));
		autoId--;

	}

	private void alterar() {
		int id = Integer.parseInt(tfid.getText());
		Orcamento cadastro = new Orcamento(id);
		int indice = DespesaProcess.des.indexOf(cadastro);
		if (tfFuncionario.getText().length() != 0 && tfData.getText().length() != 0
				&& tfServicos.getText().length() != 0 && tfDespesas.getText().length() != 0) {

			DespesaProcess.des.set(indice, new Orcamento(autoId, tfFuncionario.getText(), tfData.getText(),
					tfServicos.getText(), tfDespesas.getText()));
			autoId++;
			preencherTabela();
			limparCampos();
		}

	}

	private void buscar() {

		String entrada = JOptionPane.showInputDialog(this, "Digite o Id do serviço:");

		boolean isNumeric = true;
		if (entrada != null) {
			for (int i = 0; i < entrada.length(); i++) {
				if (!Character.isDigit(entrada.charAt(i))) {
					isNumeric = false;
				}
			}
		} else {
			isNumeric = false;
		}
		if (isNumeric) {
			int id = Integer.parseInt(entrada);
			Orcamento cadastro = new Orcamento(id);
			if (DespesaProcess.des.contains(cadastro)) {
				int indice = DespesaProcess.des.indexOf(cadastro);
				tfid.setText(DespesaProcess.des.get(indice).getId("s"));
				tfFuncionario.setText(DespesaProcess.des.get(indice).getFuncionario());
				tfData.setText(DespesaProcess.des.get(indice).getData());
				tfServicos.setText(DespesaProcess.des.get(indice).getServico());
				tfDespesas.setText(DespesaProcess.des.get(indice).getDespesas());
				DespesaProcess.salvar();
			} else {
				JOptionPane.showMessageDialog(this, "Serviço não encontrado");
			}
		}

	}

	public void limparCampos() {
		tfFuncionario.setText(null);
		tfData.setText(null);
		tfServicos.setText(null);
		tfDespesas.setText(null);

	}

	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Orcamento c : DespesaProcess.des) {

			tableModel.addRow(
					new String[] { c.getId("s"), c.getFuncionario(), c.getData(), c.getServico(), c.getDespesas() });

		}

	}

	public void cancelar() {
		tfFuncionario.setText(null);
		tfData.setText(null);
		tfServicos.setText(null);
		tfDespesas.setText(null);
		btExcluir.setEnabled(false);
		btAlterar.setEnabled(false);
		btEnviar.setEnabled(true);
		btBuscar.setEnabled(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == btEnviar) {
			enviar();
		}
		if (e.getSource() == btExcluir) {
			excluir();
			btExcluir.setEnabled(false);
			btAlterar.setEnabled(false);
			btEnviar.setEnabled(true);
			btBuscar.setEnabled(true);
		}

		if (e.getSource() == btBuscar) {
			buscar();
			btExcluir.setEnabled(true);
			btAlterar.setEnabled(true);
			btEnviar.setEnabled(false);

		}
		if (e.getSource() == btAlterar) {
			alterar();
			btExcluir.setEnabled(false);
			btAlterar.setEnabled(false);
			btEnviar.setEnabled(true);
			btBuscar.setEnabled(true);
		}

		if (e.getSource() == btCancelar) {
			cancelar();
			btCancelar.setVisible(false);
		}

	}

	public static void main(String[] args) throws ParseException {
		DespesaProcess.abrir();
		new Main().setVisible(true);
	}

}
