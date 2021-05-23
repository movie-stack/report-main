import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Serie,
SerieActor,
Actor,
} from '../models';
import {SerieRepository} from '../repositories';

export class SerieActorController {
  constructor(
    @repository(SerieRepository) protected serieRepository: SerieRepository,
  ) { }

  @get('/series/{id}/actors', {
    responses: {
      '200': {
        description: 'Array of Serie has many Actor through SerieActor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Actor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Actor>,
  ): Promise<Actor[]> {
    return this.serieRepository.actors(id).find(filter);
  }

  @post('/series/{id}/actors', {
    responses: {
      '200': {
        description: 'create a Actor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Actor)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Serie.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Actor, {
            title: 'NewActorInSerie',
            exclude: ['id'],
          }),
        },
      },
    }) actor: Omit<Actor, 'id'>,
  ): Promise<Actor> {
    return this.serieRepository.actors(id).create(actor);
  }

  @patch('/series/{id}/actors', {
    responses: {
      '200': {
        description: 'Serie.Actor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Actor, {partial: true}),
        },
      },
    })
    actor: Partial<Actor>,
    @param.query.object('where', getWhereSchemaFor(Actor)) where?: Where<Actor>,
  ): Promise<Count> {
    return this.serieRepository.actors(id).patch(actor, where);
  }

  @del('/series/{id}/actors', {
    responses: {
      '200': {
        description: 'Serie.Actor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Actor)) where?: Where<Actor>,
  ): Promise<Count> {
    return this.serieRepository.actors(id).delete(where);
  }
}
