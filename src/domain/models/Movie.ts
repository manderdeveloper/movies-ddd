import { MovieDirector } from "../valueObjects/movie/MovieDirector";
import { MovieId } from "../valueObjects/movie/MovieId";
import { MovieTitle } from "../valueObjects/movie/MovieTitle";
import { MovieYear } from "../valueObjects/movie/MovieYear";
import { Genre } from "./Genre";

export class Movie {

  readonly id: MovieId;
  readonly title: MovieTitle;
  readonly director: MovieDirector;
  readonly year: MovieYear;
  readonly genre: Genre

  constructor(id: MovieId, title: MovieTitle, director: MovieDirector, year: MovieYear, genre: Genre) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.genre = genre;
  }

  static fromPrimitives(plainData: { id: string; title: string; director: string,  year: number,  genre: Genre }): Movie {
    return new Movie(
      new MovieId(plainData.id),
      new MovieTitle(plainData.title),
      new MovieDirector(plainData.director),
      new MovieYear(plainData.year),
      plainData.genre
    );
  }

  toPrimitives(): any {
    return {
      id : this.id.value,
      title : this.title.value,
      director : this.director.value,
      year : this.year.value,
      genre : this.genre.id.value
    };
  }

}