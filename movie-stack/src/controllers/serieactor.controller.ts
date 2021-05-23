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
import {SerieActor} from '../models';
import {SerieActorRepository} from '../repositories';

export class SerieactorController {
  constructor(
    @repository(SerieActorRepository)
    public serieActorRepository : SerieActorRepository,
  ) {}

  @post('/serie-actors')
  @response(200, {
    description: 'SerieActor model instance',
    content: {'application/json': {schema: getModelSchemaRef(SerieActor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SerieActor, {
            title: 'NewSerieActor',
            exclude: ['id'],
          }),
        },
      },
    })
    serieActor: Omit<SerieActor, 'id'>,
  ): Promise<SerieActor> {
    return this.serieActorRepository.create(serieActor);
  }

  @get('/serie-actors/count')
  @response(200, {
    description: 'SerieActor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SerieActor) where?: Where<SerieActor>,
  ): Promise<Count> {
    return this.serieActorRepository.count(where);
  }

  @get('/serie-actors')
  @response(200, {
    description: 'Array of SerieActor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SerieActor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SerieActor) filter?: Filter<SerieActor>,
  ): Promise<SerieActor[]> {
    return this.serieActorRepository.find(filter);
  }

  @patch('/serie-actors')
  @response(200, {
    description: 'SerieActor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SerieActor, {partial: true}),
        },
      },
    })
    serieActor: SerieActor,
    @param.where(SerieActor) where?: Where<SerieActor>,
  ): Promise<Count> {
    return this.serieActorRepository.updateAll(serieActor, where);
  }

  @get('/serie-actors/{id}')
  @response(200, {
    description: 'SerieActor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SerieActor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SerieActor, {exclude: 'where'}) filter?: FilterExcludingWhere<SerieActor>
  ): Promise<SerieActor> {
    return this.serieActorRepository.findById(id, filter);
  }

  @patch('/serie-actors/{id}')
  @response(204, {
    description: 'SerieActor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SerieActor, {partial: true}),
        },
      },
    })
    serieActor: SerieActor,
  ): Promise<void> {
    await this.serieActorRepository.updateById(id, serieActor);
  }

  @put('/serie-actors/{id}')
  @response(204, {
    description: 'SerieActor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() serieActor: SerieActor,
  ): Promise<void> {
    await this.serieActorRepository.replaceById(id, serieActor);
  }

  @del('/serie-actors/{id}')
  @response(204, {
    description: 'SerieActor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.serieActorRepository.deleteById(id);
  }
}
