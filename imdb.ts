//Clase IMDB

import { Movie } from './movie';
var fs=require("fs");//npm install --save-dev @types/node
const readline = require('readline');

export class IMDB {
    public movies:Movie[];

    constructor (movies:Movie[]) {
        this.movies=movies;
    }

    public escribirEnFicheroJSON(nombreFichero:string) {
        
        //Método Nacho
        // let data:string=JSON.stringify(this);
        // fs.writeFileSync(nombreFichero,data);

        //Método Jaime
        let data:string=JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero,data);
    }

    public static obtenerInstanciaIMDB(nombreFichero:string):IMDB {
        let data:string=fs.readFileSync(nombreFichero,"utf8");
        let dataJSON:IMDB=JSON.parse(data);

        let pelis:Movie[]=[];
        for (let i=0;i<dataJSON.movies.length;i++) {
            pelis.push(new Movie(dataJSON.movies[i]["title"],dataJSON.movies[i]["releaseYear"],dataJSON.movies[i]["nationality"],dataJSON.movies[i]["genre"]));    
        }
        return new IMDB(pelis);
    }

    public addMovie() {
        this.escribirEnFicheroJSON("imdbBBDD.json");               
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
         });
            
        rl.question("What is the title ? ", function(answer1:string) {            
            rl.question("what is the release year ? ", function(answer2:number) {
                rl.question("What is the nationality ? ", function(answer3:string) {
                    rl.question("What is the genre ? ", function(answer4:string) {
                    let pelicula:Movie=new Movie(answer1,answer2,answer3,answer4);
                    
                    //Método Nacho
                    // let peliJSON:string=JSON.stringify(pelicula);
                    // let miImbd:IMDB=IMDB.obtenerInstanciaIMDB("imdbBBDD.json");
                    // let imdbJSON:string=JSON.stringify(miImbd);
                    // let strJoin:string=imdbJSON.split("]}")[0] + "," + peliJSON + "]}";

                    //Método Jaime
                    let miImbd:IMDB=IMDB.obtenerInstanciaIMDB("imdbBBDD.json");
                    miImbd.movies.push(pelicula);
                    let imdbJSON:string=JSON.stringify(miImbd, null, 2);

                    fs.writeFileSync("imdbBBDD.json",imdbJSON);                                      
                    rl.close();
                    console.log("La nueva pelicula creada se ha almacenado en el archivo: imdbBBDD.json");
                    }); 
                });               
            });
        });          
    
        this.escribirEnFicheroJSON("imdbBBDD.json");
    }
}