import { GenreId } from "../valueObjects/genre/GenreId";
import { GenreName } from "../valueObjects/genre/GenreName";


export class Genre {
  readonly id: GenreId;
  readonly name: GenreName;

  constructor (id: GenreId, name: GenreName) {
    this.id = id;
    this.name = name;
  }

  static fromPrimitives(plainData: { id: string; name: string}): Genre {
    return new Genre(
      new GenreId(plainData.id),
      new GenreName(plainData.name),
    );
  }

  toPrimitives(): any {
    return {
      id : this.id.value,
      title : this.name.value
    };
  }

}