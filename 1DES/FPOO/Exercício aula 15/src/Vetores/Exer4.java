package Vetores;

import java.util.Scanner;

public class Exer4 {
	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		   String[] nomes = new String[10];
	        nomes[0] = "Jo?o";
	        nomes[1] = "Marcio";
	        nomes[2] = "Paula";
	        nomes[3] = "Lucas";
	        nomes[4] = "Pedro";
	        nomes[5] = "Maria";
	        nomes[6] = "Rafael";
	        nomes[7] = "Felipe";
	        nomes[8] = "Natalia";
	        nomes[9] = "Mateus";
	        
	        
	        Scanner scan = new Scanner(System.in);
	        System.out.println("Qual nome voc� quer buscar?");
	        String Busca = scan.next();
	        
	       
	        boolean encontrou = false;
	        for(int i=0; i < nomes.length; i++){
	            String posicao = nomes[i];
	            if (posicao.equalsIgnoreCase(Busca)){
	                encontrou = true;
	                break;
	            }
	        }
	        if (encontrou){
	            System.out.println("Achei");
	        }else{
	            System.out.println("N?o Achei");
	        }
	        scan.close();
	    }
	}