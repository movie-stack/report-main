import {Entity, model, property, hasMany} from '@loopback/repository';
import {Actor} from './actor.model';
import {SerieActor} from './serie-actor.model';
import {List} from './list.model';
import {ListSerie} from './list-serie.model';

@model()
export class Serie extends Entity {
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

  @property({
    type: 'number',
    required: true,
  })
  seasons: number;

  @hasMany(() => Actor, {through: {model: () => SerieActor}})
  actors: Actor[];

  @hasMany(() => List, {through: {model: () => ListSerie}})
  lists: List[];

  constructor(data?: Partial<Serie>) {
    super(data);
  }
}

export interface SerieRelations {
  // describe navigational properties here
}

export type SerieWithRelations = Serie & SerieRelations;
