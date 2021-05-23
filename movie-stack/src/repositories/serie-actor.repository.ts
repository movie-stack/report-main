import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {SerieActor, SerieActorRelations} from '../models';

export class SerieActorRepository extends DefaultCrudRepository<
  SerieActor,
  typeof SerieActor.prototype.id,
  SerieActorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(SerieActor, dataSource);
  }
}
