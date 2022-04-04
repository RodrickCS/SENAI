package visao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Scanner;

import modelo.*;

public class Principal {

	public static Scanner scan = new Scanner(System.in);
	
	static ArrayList<Cliente> Clientes = new ArrayList<>();
	static ArrayList<Funcionario> Funcionarios = new ArrayList<>();

	public static void main(String[] args) throws ParseException {
		int menu = 0;
		while (menu != 4) {
			System.out.println("Digite uma op��o");
			System.out.println(
					"1.Cadastrar funcion�rio\n2.Cadastrar cliente\n3.Listar funcion�rios\n4.Listar clientes\n5.Sair");
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
				System.out.println("falow");
				break;
			default:
				System.out.println("Op��o inv�lida");
				break;

			}
		}

	}

	private static void cadastrarCliente() throws ParseException {
		System.out.println("id\tLimite de cr�dito\nNome\tTelefone\tData de nascimento");
		Cliente cliente = new Cliente(scan.nextInt(), scan.nextDouble(), scan.next(), scan.nextInt(), scan.next());
		Clientes.add(cliente);
		System.out.println("Cadastrado com sucesso");

	}

	private static void cadastrarFuncionario() throws ParseException {
		System.out.println("matricula\tcomissao\tNome\tTelefone\tData de nascimento");
		Funcionario funcionario = new Funcionario(scan.nextInt(), scan.nextDouble(), scan.next(), scan.nextInt(),scan.next());
		Funcionarios.add(funcionario);
		System.out.println("Cadastrado com sucesso");
	}

	private static void listarCliente() {
		for(Cliente c : Clientes) {
			System.out.println(c.toString());
		}

	}

	private static void listarFuncionario() {
		
		for(Funcionario f : Funcionarios) {
			System.out.println(f.toString());
		}

	}

}
