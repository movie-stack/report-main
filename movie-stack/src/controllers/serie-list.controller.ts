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
import {SerieRepository} from '../repositories';

export class SerieListController {
  constructor(
    @repository(SerieRepository) protected serieRepository: SerieRepository,
  ) { }

  @get('/series/{id}/lists', {
    responses: {
      '200': {
        description: 'Array of Serie has many List through ListSerie',
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
    return this.serieRepository.lists(id).find(filter);
  }
}
