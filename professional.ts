//Declaración clase Profesional
export class Professional
{
    //Declaración atributos
    private name: string;
    private age: number;
    private genre: string;
    private weight: number;
    private height: number;
    private hairColor: string;
    private eyeColor: string;
    private race: string;
    private isRetired:boolean;
    private nationality:string;
    private oscarsNumber: number;
    private profession: string;

    //Constructor
    constructor (name:string, age:number, genre:string, weight:number,
        height:number,hairColor:string,eyeColor:string,race:string,
        isRetired:boolean,nationality:string,oscarsNumber:number,
        profession:string)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    //Métodos
    public getName():string {
        return this.name;
    }
    public getAge():number {
        return this.age;
    }
    public getGenre():string {
        return this.genre;
    }
    public getWeight():number {
        return this.weight;
    }
    public getHeight():number {
        return this.height;
    }
    public getHairColor():string {
        return this.hairColor;
    }
    public getEyeColor():string {
        return this.eyeColor;
    }
    public getRace():string {
        return this.race;
    }
    public getIsRetired():boolean {
        return this.isRetired;
    }
    public getNationality():string {
        return this.nationality;
    }
    public getOscarsNumber():number {
        return this.oscarsNumber;
    }
    public getProfession():string {
        return this.profession;
    }
    public setName(name:string) {
        this.name = name;
    }
    public setAge(age:number) {
        this.age = age;
    }
    public setGenre(genre:string) {
        this.genre = genre;
    }
    public setWeight(weight:number) {
        this.weight = weight;
    }
    public setHeight(height:number) {
        this.height = height;
    }
    public setHairColor(hairColor:string) {
        this.hairColor = hairColor;
    }
    public setEyeColor(eyeColor:string) {
        this.eyeColor = eyeColor;
    }
    public setRace(race:string) {
        this.race = race;
    }
    public setIsRetired(isRetired:boolean) {
        this.isRetired = isRetired;
    }
    public setNationality(nationality:string) {
        this.nationality = nationality;
    }
    public setOscarsNumber(oscarsNumbers:number) {
        this.oscarsNumber = oscarsNumbers;
    }
    public setProfession(profession:string) {
        this.profession = profession;
    }
    public printAll() {
        console.log("The information about: " + this.name + " are:");
        console.log(" - Name: " + this.name);
        console.log(" - Age: " + this.age);
        console.log(" - Genre: " + this.genre);
        console.log(" - Weight (Kg): " + this.weight);
        console.log(" - Height (m): " + this.height);
        console.log(" - Hair Color: " + this.hairColor);
        console.log(" - Eye Color: " + this.eyeColor);
        console.log(" - Race: " + this.race);
        console.log(" - Is retired?: " + this.isRetired);
        console.log(" - Nationality: " + this.nationality);
        console.log(" - Oscars Number: " + this.oscarsNumber);
        console.log(" - Profession: " + this.profession);
        console.log("\n");
    }
}

let persona1:Professional = new Professional ("Juan", 45,
"masculino", 90, 1.88, "marrón", "verdes", "caucasico", false,
"Venezolano", 1, "Actor");
persona1.printAll();