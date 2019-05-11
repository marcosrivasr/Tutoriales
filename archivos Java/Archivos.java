import java.io.*;

public class Archivos{


    public static void main(String[] args) {
        countLines("./Archivo.csv");
        dividirArchivos("./Archivo.csv", "parte", ".csv");
    }

    public static void countLines(String filename){
        try{
            BufferedReader reader = new BufferedReader(new FileReader(filename));
            System.out.println(reader.lines().count());

            reader.close();
        }catch(IOException ioe){}
    }

    public static void createFile(String filename, String content){
        BufferedWriter writer = null;
        try{
            writer = new BufferedWriter(new FileWriter(filename));
            writer.write(content);
            writer.close();
        }catch(IOException ioe){}
    }

    public static void dividirArchivos(String filename, String newfilename, String extension){
        String line = null;
        StringBuilder content = null;
        final int offset = 10;
        int index = 0, n = 0;
        
        try{
            BufferedReader reader = new BufferedReader(new FileReader(filename));
            
            while((line = reader.readLine()) != null){
                //validamos si stringBuilder está vacio o no
                // si está vacio quiere decir que estamos empezando
                // a adjuntar la información del archivo original
                if(content == null) content = new StringBuilder();
                content.append(line + "\n");
                // n es el contador para nombrar a los nuevos archivos
                n = ++index / offset;
                // si el residuo de la división es 0 quiere decir
                // que ya debemos crear el documento
                if((index % offset) == 0 && index > 0){
                    createFile(newfilename + n + extension, content.toString());
                    content = null;
                    n = 0;
                }
            }
            if(content != null){
                createFile(newfilename + n + extension, content.toString());
            }
         reader.close();
        }catch(IOException ioe){}
    }

}