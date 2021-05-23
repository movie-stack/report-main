import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Serie, SerieRelations, Actor, SerieActor, List, ListSerie} from '../models';
import {SerieActorRepository} from './serie-actor.repository';
import {ActorRepository} from './actor.repository';
import {ListSerieRepository} from './list-serie.repository';
import {ListRepository} from './list.repository';

export class SerieRepository extends DefaultCrudRepository<
  Serie,
  typeof Serie.prototype.id,
  SerieRelations
> {

  public readonly actors: HasManyThroughRepositoryFactory<Actor, typeof Actor.prototype.id,
          SerieActor,
          typeof Serie.prototype.id
        >;

  public readonly lists: HasManyThroughRepositoryFactory<List, typeof List.prototype.id,
          ListSerie,
          typeof Serie.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SerieActorRepository') protected serieActorRepositoryGetter: Getter<SerieActorRepository>, @repository.getter('ActorRepository') protected actorRepositoryGetter: Getter<ActorRepository>, @repository.getter('ListSerieRepository') protected listSerieRepositoryGetter: Getter<ListSerieRepository>, @repository.getter('ListRepository') protected listRepositoryGetter: Getter<ListRepository>,
  ) {
    super(Serie, dataSource);
    this.lists = this.createHasManyThroughRepositoryFactoryFor('lists', listRepositoryGetter, listSerieRepositoryGetter,);
    this.registerInclusionResolver('lists', this.lists.inclusionResolver);
    this.actors = this.createHasManyThroughRepositoryFactoryFor('actors', actorRepositoryGetter, serieActorRepositoryGetter,);
    this.registerInclusionResolver('actors', this.actors.inclusionResolver);
  }
}
