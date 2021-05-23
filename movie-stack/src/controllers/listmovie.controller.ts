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
import {ListMovie} from '../models';
import {ListMovieRepository} from '../repositories';

export class ListmovieController {
  constructor(
    @repository(ListMovieRepository)
    public listMovieRepository : ListMovieRepository,
  ) {}

  @post('/list-movies')
  @response(200, {
    description: 'ListMovie model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListMovie)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListMovie, {
            title: 'NewListMovie',
            exclude: ['id'],
          }),
        },
      },
    })
    listMovie: Omit<ListMovie, 'id'>,
  ): Promise<ListMovie> {
    return this.listMovieRepository.create(listMovie);
  }

  @get('/list-movies/count')
  @response(200, {
    description: 'ListMovie model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListMovie) where?: Where<ListMovie>,
  ): Promise<Count> {
    return this.listMovieRepository.count(where);
  }

  @get('/list-movies')
  @response(200, {
    description: 'Array of ListMovie model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListMovie, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListMovie) filter?: Filter<ListMovie>,
  ): Promise<ListMovie[]> {
    return this.listMovieRepository.find(filter);
  }

  @patch('/list-movies')
  @response(200, {
    description: 'ListMovie PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListMovie, {partial: true}),
        },
      },
    })
    listMovie: ListMovie,
    @param.where(ListMovie) where?: Where<ListMovie>,
  ): Promise<Count> {
    return this.listMovieRepository.updateAll(listMovie, where);
  }

  @get('/list-movies/{id}')
  @response(200, {
    description: 'ListMovie model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListMovie, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListMovie, {exclude: 'where'}) filter?: FilterExcludingWhere<ListMovie>
  ): Promise<ListMovie> {
    return this.listMovieRepository.findById(id, filter);
  }

  @patch('/list-movies/{id}')
  @response(204, {
    description: 'ListMovie PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListMovie, {partial: true}),
        },
      },
    })
    listMovie: ListMovie,
  ): Promise<void> {
    await this.listMovieRepository.updateById(id, listMovie);
  }

  @put('/list-movies/{id}')
  @response(204, {
    description: 'ListMovie PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listMovie: ListMovie,
  ): Promise<void> {
    await this.listMovieRepository.replaceById(id, listMovie);
  }

  @del('/list-movies/{id}')
  @response(204, {
    description: 'ListMovie DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listMovieRepository.deleteById(id);
  }
}
