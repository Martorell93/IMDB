//Clase IMDB

import { Movie } from "./movie";

export class IMDB {
    public movies:Movie[];

    constructor (movies:Movie[]) {
        this.movies=movies;
    }
}