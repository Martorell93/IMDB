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

    constructor (title:string,releaseYear:number,nationality:string) {
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality=nationality;
    }

    public showMovie() {        
        console.log(`\nTitle: ${this.title}`);
        console.log(`Release year: ${this.releaseYear}`);
        console.log(`Actors:`);
        for (let actor of this.actors) {
            console.log("\t" + actor.name);
        }     
        console.log(`Nationality: ${this.nationality}`);
        console.log(`Director: ${this.director.name}`);
        console.log(`Writer: ${this.writer.name}`);
        console.log(`Language: ${this.language}`);
        console.log(`Platform: ${this.releaseYear}`);
        console.log(`Is MCU: ${this.isMCU}`);
        console.log(`Main character name: ${this.mainCharacterName}`);
        console.log(`Producer: ${this.producer.name}`);
        console.log(`Distributor: ${this.distributor}`);
        console.log(`Genre: ${this.genre}`);
        
    }
}
