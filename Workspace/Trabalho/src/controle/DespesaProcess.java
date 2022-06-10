package controle;

import java.text.ParseException;

import java.util.ArrayList;

import modelo.Orcamento;

public class DespesaProcess {

	public static ArrayList<Orcamento> des = new ArrayList<>();
	private static DAO ds = new DAO();

	public static void abrir() {
		des = ds.ler();
	}

	public static void salvar() {
		ds.escrever(des);
	}

	public static void carregarTestes() throws ParseException {
		des = new ArrayList<>();

		des.add(new Orcamento(1,"Vanessa","15/05/2022","Hidratação facial","130"));
		des.add(new Orcamento(2,"Vanessa","22/05/2022","Esfoliação","10"));
		des.add(new Orcamento(3,"Vanessa","26/07/2022","Maquiagem","13"));
		des.add(new Orcamento(4,"Vanessa","27/02/2022","Maquiagem","13"));
		des.add(new Orcamento(5,"Vanessa","23/09/2022","Maquiagem","13"));
		des.add(new Orcamento(6,"Miguel","12/02/2022","Limpeza de pele","100"));
		des.add(new Orcamento(7,"Miguel","05/03/2022","Limpeza de pele","100"));
		des.add(new Orcamento(8,"Miguel","04/06/2022","Hidratação facial","130"));
		des.add(new Orcamento(9,"Miguel","08/08/2022","Hidratação facial","130"));
		des.add(new Orcamento(10,"Miguel","10/12/2022","Design de sobrancelhas","90"));
		des.add(new Orcamento(11,"Heitor","17/10/2022","Design de sobrancelhas","90"));
		des.add(new Orcamento(12,"Heitor","09/07/2022","Progressiva","200"));
		des.add(new Orcamento(13,"Heitor","23/02/2022","Progressiva","200"));
		des.add(new Orcamento(14,"Heitor","12/10/2022","Progressiva","200"));
		des.add(new Orcamento(15,"Heitor","04/05/2022","Design de sobrancelhas","90"));
		
		
		
	}
}
