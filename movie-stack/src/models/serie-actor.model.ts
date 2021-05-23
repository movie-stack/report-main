import {Entity, model, property} from '@loopback/repository';

@model()
export class SerieActor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  serieId?: number;

  @property({
    type: 'number',
  })
  actorId?: number;

  constructor(data?: Partial<SerieActor>) {
    super(data);
  }
}

export interface SerieActorRelations {
  // describe navigational properties here
}

export type SerieActorWithRelations = SerieActor & SerieActorRelations;
