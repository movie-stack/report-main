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
  Serie
} from '../models';
import {ActorRepository} from '../repositories';

export class ActorSerieController {
  constructor(
    @repository(ActorRepository) protected actorRepository: ActorRepository,
  ) { }

  @get('/actors/{id}/series', {
    responses: {
      '200': {
        description: 'Array of Actor has many Serie through SerieActor',
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
    return this.actorRepository.series(id).find(filter);
  }
}
