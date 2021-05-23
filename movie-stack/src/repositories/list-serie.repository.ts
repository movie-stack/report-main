import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListSerie, ListSerieRelations} from '../models';

export class ListSerieRepository extends DefaultCrudRepository<
  ListSerie,
  typeof ListSerie.prototype.id,
  ListSerieRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ListSerie, dataSource);
  }
}
