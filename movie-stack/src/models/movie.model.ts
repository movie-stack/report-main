import {Entity, model, property, hasMany} from '@loopback/repository';
import {Actor} from './actor.model';
import {MovieActor} from './movie-actor.model';
import {List} from './list.model';
import {ListMovie} from './list-movie.model';

@model()
export class Movie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  release_date: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @hasMany(() => Actor, {through: {model: () => MovieActor}})
  actors: Actor[];

  @hasMany(() => List, {through: {model: () => ListMovie}})
  lists: List[];

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
