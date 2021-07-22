//Clase Movie

import {Professional} from "./professional";

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:Professional;
    public distributor:string;
    public genre:string;

    constructor (title:string,releaseYear:number,nationality:string,genre:string) {
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality=nationality;
        this.genre=genre;
    }

    public showMovie() {        
        console.log(`\nTitle: ${this.title}`);
        console.log(`Release year: ${this.releaseYear}`);
        console.log(`Actors:`);
        for (let i=0;i<this.actors?.length;i++) {
            console.log("\t" + this.actors[i].getName());
        }     
        console.log(`Nationality: ${this.nationality}`);
        console.log(`Director: ${(this.director?this.director.getName():"")}`);
        console.log(`Writer: ${(this.writer?this.writer.getName():"")}`);
        console.log(`Language: ${(this.language?this.language:"")}`);
        console.log(`Platform: ${(this.platform?this.platform:"")}`);
        console.log(`Is MCU: ${(this.isMCU?this.isMCU:"")}`);
        console.log(`Main character name: ${(this.mainCharacterName?this.mainCharacterName:"")}`);
        console.log(`Producer: ${(this.producer?this.producer.getName():"")}`);
        console.log(`Distributor: ${(this.distributor?this.distributor:"")}`);
        console.log(`Genre: ${this.genre}`);
        
    }
}
