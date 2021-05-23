import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Actor, ActorRelations, Movie, MovieActor, Serie, SerieActor} from '../models';
import {MovieActorRepository} from './movie-actor.repository';
import {MovieRepository} from './movie.repository';
import {SerieActorRepository} from './serie-actor.repository';
import {SerieRepository} from './serie.repository';

export class ActorRepository extends DefaultCrudRepository<
  Actor,
  typeof Actor.prototype.id,
  ActorRelations
> {

  public readonly movies: HasManyThroughRepositoryFactory<Movie, typeof Movie.prototype.id,
          MovieActor,
          typeof Actor.prototype.id
        >;

  public readonly series: HasManyThroughRepositoryFactory<Serie, typeof Serie.prototype.id,
          SerieActor,
          typeof Actor.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MovieActorRepository') protected movieActorRepositoryGetter: Getter<MovieActorRepository>, @repository.getter('MovieRepository') protected movieRepositoryGetter: Getter<MovieRepository>, @repository.getter('SerieActorRepository') protected serieActorRepositoryGetter: Getter<SerieActorRepository>, @repository.getter('SerieRepository') protected serieRepositoryGetter: Getter<SerieRepository>,
  ) {
    super(Actor, dataSource);
    this.series = this.createHasManyThroughRepositoryFactoryFor('series', serieRepositoryGetter, serieActorRepositoryGetter,);
    this.registerInclusionResolver('series', this.series.inclusionResolver);
    this.movies = this.createHasManyThroughRepositoryFactoryFor('movies', movieRepositoryGetter, movieActorRepositoryGetter,);
    this.registerInclusionResolver('movies', this.movies.inclusionResolver);
  }
}
