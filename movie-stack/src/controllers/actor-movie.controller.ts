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
  Movie
} from '../models';
import {ActorRepository} from '../repositories';

export class ActorMovieController {
  constructor(
    @repository(ActorRepository) protected actorRepository: ActorRepository,
  ) { }

  @get('/actors/{id}/movies', {
    responses: {
      '200': {
        description: 'Array of Actor has many Movie through MovieActor',
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
    return this.actorRepository.movies(id).find(filter);
  }
}
