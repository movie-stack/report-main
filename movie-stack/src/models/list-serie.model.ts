import {Entity, model, property} from '@loopback/repository';

@model()
export class ListSerie extends Entity {
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
  serieId?: number;

  constructor(data?: Partial<ListSerie>) {
    super(data);
  }
}

export interface ListSerieRelations {
  // describe navigational properties here
}

export type ListSerieWithRelations = ListSerie & ListSerieRelations;
