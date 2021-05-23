import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListMovie, ListMovieRelations} from '../models';

export class ListMovieRepository extends DefaultCrudRepository<
  ListMovie,
  typeof ListMovie.prototype.id,
  ListMovieRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ListMovie, dataSource);
  }
}
