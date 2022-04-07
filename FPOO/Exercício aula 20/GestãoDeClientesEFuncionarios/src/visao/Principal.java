package visao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Scanner;

import src.modelo.*;

public class Principal {

	public static Scanner scan = new Scanner(System.in);

	static ArrayList<Cliente> Clientes = new ArrayList<>();
	static ArrayList<Funcionario> Funcionarios = new ArrayList<>();

	public static void main(String[] args) throws ParseException {
		int menu = 0;
		while (menu != 6) {
			System.out.println("Digite uma opção");
			System.out.println(
					"1.Cadastrar funcionário\n2.Cadastrar cliente\n3.Listar funcionários\n4.Listar clientes\n5.Calcular comissão\n6.Sair");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				cadastrarFuncionario();
				break;
			case 2:
				cadastrarCliente();
				break;
			case 3:
				listarFuncionario();
				break;
			case 4:
				listarCliente();
				break;
			case 5:
				calcularComissao();
				break;
			case 6:
				System.out.println("falow");
				break;
			default:
				System.out.println("Opção inválida");
				break;

			}
		}

	}

	private static void cadastrarCliente() throws ParseException {
		System.out.println("id\tLimite de crédito\nNome\tTelefone\tData de nascimento");
		Cliente cliente = new Cliente(scan.nextInt(), scan.nextDouble(), scan.next(), scan.nextInt(), scan.next());
		Clientes.add(cliente);
		System.out.println("Cadastrado com sucesso");

	}

	private static void cadastrarFuncionario() throws ParseException {
		System.out.println("matricula\tcomissao\tNome\tTelefone\tData de nascimento");
		Funcionario funcionario = new Funcionario(scan.nextInt(), scan.nextDouble(), scan.next(), scan.nextInt(),
				scan.next());
		Funcionarios.add(funcionario);
		System.out.println("Cadastrado com sucesso");
	}

	private static void listarCliente() {
		for (Cliente c : Clientes) {
			System.out.println(c.toString());
		}

	}

	private static void listarFuncionario() {

		for (Funcionario f : Funcionarios) {
			System.out.println(f.toString());
		}

	}

	public static void calcularComissao() {

		float comissao = 0;

		System.out.println("Digite por quanto vendeu o produto");
		float produtoVendido = scan.nextFloat();

		System.out.println("Digite a porcentagem da comissão");
		float comissaoscan = scan.nextFloat();

		if (produtoVendido < 5000)
			comissao = comissaoscan * produtoVendido / 100;
		else if (produtoVendido <= 10000)
			comissao = comissaoscan * produtoVendido / 100;
		else
			comissao = comissaoscan * produtoVendido / 100;

		System.out.println("-----------------------------");
		System.out.println("Valor do produto vendido: " + produtoVendido);
		System.out.println("comissão: " + comissaoscan + "%");
		System.out.println("comissão calculada: " + comissao + "%");
		System.out.println("-----------------------------");

	}
}
