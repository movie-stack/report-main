import {
  Filter,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,

  param
} from '@loopback/rest';
import {
  List
} from '../models';
import {MovieRepository} from '../repositories';

export class MovieListController {
  constructor(
    @repository(MovieRepository) protected movieRepository: MovieRepository,
  ) { }

  @get('/movies/{id}/lists', {
    responses: {
      '200': {
        description: 'Array of Movie has many List through ListMovie',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(List)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<List>,
  ): Promise<List[]> {
    return this.movieRepository.lists(id).find(filter);
  }
}
