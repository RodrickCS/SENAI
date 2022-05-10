package modelo;

public class Planilha {

	private float v1;
	private float v2;
	private float v3;

	public Planilha(String entrada) {
		v1 = Float.parseFloat(entrada.split(";")[1]);
		v2 = Float.parseFloat(entrada.split(";")[2]);
		v3 = Float.parseFloat(entrada.split(";")[3]);
	}

	public float media() {

		float media = v1 + v2 + v3 / 3;

		return media;
	}

}
