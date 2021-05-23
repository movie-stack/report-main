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
List,
ListSerie,
Serie,
} from '../models';
import {ListRepository} from '../repositories';

export class ListSerieController {
  constructor(
    @repository(ListRepository) protected listRepository: ListRepository,
  ) { }

  @get('/lists/{id}/series', {
    responses: {
      '200': {
        description: 'Array of List has many Serie through ListSerie',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Serie)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Serie>,
  ): Promise<Serie[]> {
    return this.listRepository.series(id).find(filter);
  }

  @post('/lists/{id}/series', {
    responses: {
      '200': {
        description: 'create a Serie model instance',
        content: {'application/json': {schema: getModelSchemaRef(Serie)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof List.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Serie, {
            title: 'NewSerieInList',
            exclude: ['id'],
          }),
        },
      },
    }) serie: Omit<Serie, 'id'>,
  ): Promise<Serie> {
    return this.listRepository.series(id).create(serie);
  }

  @patch('/lists/{id}/series', {
    responses: {
      '200': {
        description: 'List.Serie PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Serie, {partial: true}),
        },
      },
    })
    serie: Partial<Serie>,
    @param.query.object('where', getWhereSchemaFor(Serie)) where?: Where<Serie>,
  ): Promise<Count> {
    return this.listRepository.series(id).patch(serie, where);
  }

  @del('/lists/{id}/series', {
    responses: {
      '200': {
        description: 'List.Serie DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Serie)) where?: Where<Serie>,
  ): Promise<Count> {
    return this.listRepository.series(id).delete(where);
  }
}
