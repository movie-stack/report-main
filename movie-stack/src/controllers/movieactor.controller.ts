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
import {MovieActor} from '../models';
import {MovieActorRepository} from '../repositories';

export class MovieactorController {
  constructor(
    @repository(MovieActorRepository)
    public movieActorRepository : MovieActorRepository,
  ) {}

  @post('/movie-actors')
  @response(200, {
    description: 'MovieActor model instance',
    content: {'application/json': {schema: getModelSchemaRef(MovieActor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MovieActor, {
            title: 'NewMovieActor',
            exclude: ['id'],
          }),
        },
      },
    })
    movieActor: Omit<MovieActor, 'id'>,
  ): Promise<MovieActor> {
    return this.movieActorRepository.create(movieActor);
  }

  @get('/movie-actors/count')
  @response(200, {
    description: 'MovieActor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MovieActor) where?: Where<MovieActor>,
  ): Promise<Count> {
    return this.movieActorRepository.count(where);
  }

  @get('/movie-actors')
  @response(200, {
    description: 'Array of MovieActor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MovieActor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MovieActor) filter?: Filter<MovieActor>,
  ): Promise<MovieActor[]> {
    return this.movieActorRepository.find(filter);
  }

  @patch('/movie-actors')
  @response(200, {
    description: 'MovieActor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MovieActor, {partial: true}),
        },
      },
    })
    movieActor: MovieActor,
    @param.where(MovieActor) where?: Where<MovieActor>,
  ): Promise<Count> {
    return this.movieActorRepository.updateAll(movieActor, where);
  }

  @get('/movie-actors/{id}')
  @response(200, {
    description: 'MovieActor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MovieActor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MovieActor, {exclude: 'where'}) filter?: FilterExcludingWhere<MovieActor>
  ): Promise<MovieActor> {
    return this.movieActorRepository.findById(id, filter);
  }

  @patch('/movie-actors/{id}')
  @response(204, {
    description: 'MovieActor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MovieActor, {partial: true}),
        },
      },
    })
    movieActor: MovieActor,
  ): Promise<void> {
    await this.movieActorRepository.updateById(id, movieActor);
  }

  @put('/movie-actors/{id}')
  @response(204, {
    description: 'MovieActor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() movieActor: MovieActor,
  ): Promise<void> {
    await this.movieActorRepository.replaceById(id, movieActor);
  }

  @del('/movie-actors/{id}')
  @response(204, {
    description: 'MovieActor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.movieActorRepository.deleteById(id);
  }
}
