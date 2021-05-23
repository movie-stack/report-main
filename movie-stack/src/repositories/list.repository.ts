import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {List, ListRelations, Movie, ListMovie, Serie, ListSerie} from '../models';
import {ListMovieRepository} from './list-movie.repository';
import {MovieRepository} from './movie.repository';
import {ListSerieRepository} from './list-serie.repository';
import {SerieRepository} from './serie.repository';

export class ListRepository extends DefaultCrudRepository<
  List,
  typeof List.prototype.id,
  ListRelations
> {

  public readonly movies: HasManyThroughRepositoryFactory<Movie, typeof Movie.prototype.id,
          ListMovie,
          typeof List.prototype.id
        >;

  public readonly series: HasManyThroughRepositoryFactory<Serie, typeof Serie.prototype.id,
          ListSerie,
          typeof List.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ListMovieRepository') protected listMovieRepositoryGetter: Getter<ListMovieRepository>, @repository.getter('MovieRepository') protected movieRepositoryGetter: Getter<MovieRepository>, @repository.getter('ListSerieRepository') protected listSerieRepositoryGetter: Getter<ListSerieRepository>, @repository.getter('SerieRepository') protected serieRepositoryGetter: Getter<SerieRepository>,
  ) {
    super(List, dataSource);
    this.series = this.createHasManyThroughRepositoryFactoryFor('series', serieRepositoryGetter, listSerieRepositoryGetter,);
    this.registerInclusionResolver('series', this.series.inclusionResolver);
    this.movies = this.createHasManyThroughRepositoryFactoryFor('movies', movieRepositoryGetter, listMovieRepositoryGetter,);
    this.registerInclusionResolver('movies', this.movies.inclusionResolver);
  }
}
