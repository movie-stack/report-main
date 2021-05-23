import {Entity, model, property} from '@loopback/repository';

@model()
export class ListMovie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  listId?: number;

  @property({
    type: 'number',
  })
  movieId?: number;

  constructor(data?: Partial<ListMovie>) {
    super(data);
  }
}

export interface ListMovieRelations {
  // describe navigational properties here
}

export type ListMovieWithRelations = ListMovie & ListMovieRelations;
