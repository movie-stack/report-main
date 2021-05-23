import {Entity, model, property, hasMany} from '@loopback/repository';
import {Movie} from './movie.model';
import {MovieActor} from './movie-actor.model';
import {Serie} from './serie.model';
import {SerieActor} from './serie-actor.model';

@model()
export class Actor extends Entity {
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
  birthdate: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @hasMany(() => Movie, {through: {model: () => MovieActor}})
  movies: Movie[];

  @hasMany(() => Serie, {through: {model: () => SerieActor}})
  series: Serie[];

  constructor(data?: Partial<Actor>) {
    super(data);
  }
}

export interface ActorRelations {
  // describe navigational properties here
}

export type ActorWithRelations = Actor & ActorRelations;
