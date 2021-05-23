import {Entity, model, property, hasMany} from '@loopback/repository';
import {Movie} from './movie.model';
import {ListMovie} from './list-movie.model';
import {Serie} from './serie.model';
import {ListSerie} from './list-serie.model';

@model()
export class List extends Entity {
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
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  creation_date: string;

  @property({
    type: 'number',
  })
  userId?: number;

  @hasMany(() => Movie, {through: {model: () => ListMovie}})
  movies: Movie[];

  @hasMany(() => Serie, {through: {model: () => ListSerie}})
  series: Serie[];

  constructor(data?: Partial<List>) {
    super(data);
  }
}

export interface ListRelations {
  // describe navigational properties here
}

export type ListWithRelations = List & ListRelations;
