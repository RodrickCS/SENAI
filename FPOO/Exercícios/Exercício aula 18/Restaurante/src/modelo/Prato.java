package modelo;

public class Prato {

	public int codPrato;
	public	String tipo;
	public String Nome;
	public String Descricao;
	public Float preco;

	public Prato() {

	}

	public Prato(int codPrato, String tipo, String Nome, String Descricao, Float preco) {
		this.codPrato = codPrato;
		this.tipo = tipo;
		this.Nome = Nome;
		this.Descricao = Descricao;
		this.preco = preco;
	}

	public String paraString() {
		return codPrato + "\t" + tipo + "\t" + Nome + "\t" + Descricao + "\t" + String.format("%.1f", preco);
	}

}