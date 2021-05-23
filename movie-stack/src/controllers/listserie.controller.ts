import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ListSerie} from '../models';
import {ListSerieRepository} from '../repositories';

export class ListserieController {
  constructor(
    @repository(ListSerieRepository)
    public listSerieRepository : ListSerieRepository,
  ) {}

  @post('/list-series')
  @response(200, {
    description: 'ListSerie model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListSerie)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListSerie, {
            title: 'NewListSerie',
            exclude: ['id'],
          }),
        },
      },
    })
    listSerie: Omit<ListSerie, 'id'>,
  ): Promise<ListSerie> {
    return this.listSerieRepository.create(listSerie);
  }

  @get('/list-series/count')
  @response(200, {
    description: 'ListSerie model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListSerie) where?: Where<ListSerie>,
  ): Promise<Count> {
    return this.listSerieRepository.count(where);
  }

  @get('/list-series')
  @response(200, {
    description: 'Array of ListSerie model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListSerie, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListSerie) filter?: Filter<ListSerie>,
  ): Promise<ListSerie[]> {
    return this.listSerieRepository.find(filter);
  }

  @patch('/list-series')
  @response(200, {
    description: 'ListSerie PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListSerie, {partial: true}),
        },
      },
    })
    listSerie: ListSerie,
    @param.where(ListSerie) where?: Where<ListSerie>,
  ): Promise<Count> {
    return this.listSerieRepository.updateAll(listSerie, where);
  }

  @get('/list-series/{id}')
  @response(200, {
    description: 'ListSerie model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListSerie, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListSerie, {exclude: 'where'}) filter?: FilterExcludingWhere<ListSerie>
  ): Promise<ListSerie> {
    return this.listSerieRepository.findById(id, filter);
  }

  @patch('/list-series/{id}')
  @response(204, {
    description: 'ListSerie PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListSerie, {partial: true}),
        },
      },
    })
    listSerie: ListSerie,
  ): Promise<void> {
    await this.listSerieRepository.updateById(id, listSerie);
  }

  @put('/list-series/{id}')
  @response(204, {
    description: 'ListSerie PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listSerie: ListSerie,
  ): Promise<void> {
    await this.listSerieRepository.replaceById(id, listSerie);
  }

  @del('/list-series/{id}')
  @response(204, {
    description: 'ListSerie DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listSerieRepository.deleteById(id);
  }
}
