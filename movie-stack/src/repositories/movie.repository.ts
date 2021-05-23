import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Movie, MovieRelations, Actor, MovieActor, List, ListMovie} from '../models';
import {MovieActorRepository} from './movie-actor.repository';
import {ActorRepository} from './actor.repository';
import {ListMovieRepository} from './list-movie.repository';
import {ListRepository} from './list.repository';

export class MovieRepository extends DefaultCrudRepository<
  Movie,
  typeof Movie.prototype.id,
  MovieRelations
> {

  public readonly actors: HasManyThroughRepositoryFactory<Actor, typeof Actor.prototype.id,
          MovieActor,
          typeof Movie.prototype.id
        >;

  public readonly lists: HasManyThroughRepositoryFactory<List, typeof List.prototype.id,
          ListMovie,
          typeof Movie.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MovieActorRepository') protected movieActorRepositoryGetter: Getter<MovieActorRepository>, @repository.getter('ActorRepository') protected actorRepositoryGetter: Getter<ActorRepository>, @repository.getter('ListMovieRepository') protected listMovieRepositoryGetter: Getter<ListMovieRepository>, @repository.getter('ListRepository') protected listRepositoryGetter: Getter<ListRepository>,
  ) {
    super(Movie, dataSource);
    this.lists = this.createHasManyThroughRepositoryFactoryFor('lists', listRepositoryGetter, listMovieRepositoryGetter,);
    this.registerInclusionResolver('lists', this.lists.inclusionResolver);
    this.actors = this.createHasManyThroughRepositoryFactoryFor('actors', actorRepositoryGetter, movieActorRepositoryGetter,);
    this.registerInclusionResolver('actors', this.actors.inclusionResolver);
  }
}
