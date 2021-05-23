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
ListMovie,
Movie,
} from '../models';
import {ListRepository} from '../repositories';

export class ListMovieController {
  constructor(
    @repository(ListRepository) protected listRepository: ListRepository,
  ) { }

  @get('/lists/{id}/movies', {
    responses: {
      '200': {
        description: 'Array of List has many Movie through ListMovie',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Movie)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Movie>,
  ): Promise<Movie[]> {
    return this.listRepository.movies(id).find(filter);
  }

  @post('/lists/{id}/movies', {
    responses: {
      '200': {
        description: 'create a Movie model instance',
        content: {'application/json': {schema: getModelSchemaRef(Movie)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof List.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movie, {
            title: 'NewMovieInList',
            exclude: ['id'],
          }),
        },
      },
    }) movie: Omit<Movie, 'id'>,
  ): Promise<Movie> {
    return this.listRepository.movies(id).create(movie);
  }

  @patch('/lists/{id}/movies', {
    responses: {
      '200': {
        description: 'List.Movie PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movie, {partial: true}),
        },
      },
    })
    movie: Partial<Movie>,
    @param.query.object('where', getWhereSchemaFor(Movie)) where?: Where<Movie>,
  ): Promise<Count> {
    return this.listRepository.movies(id).patch(movie, where);
  }

  @del('/lists/{id}/movies', {
    responses: {
      '200': {
        description: 'List.Movie DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Movie)) where?: Where<Movie>,
  ): Promise<Count> {
    return this.listRepository.movies(id).delete(where);
  }
}
