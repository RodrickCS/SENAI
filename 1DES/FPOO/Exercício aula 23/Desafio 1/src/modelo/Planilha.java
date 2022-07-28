package modelo;

import java.util.Calendar;

public class Planilha {
	
		// Atributos
	
		private Calendar calendar = Calendar.getInstance();
		private int v2;
		private int ano = calendar.get(Calendar.YEAR);

		// Construtor
		public Planilha(String entrada) {
			v2 = Integer.parseInt(entrada.split(";")[1]);
			ano = 2022;
		}

		// Métodos para Processamento
		public int idade() {
			return ano - v2;
		}
}

