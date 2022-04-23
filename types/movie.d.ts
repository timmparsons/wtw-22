export interface Movie {
  page?: number;
  results?: Result[];
  totalResults?: number;
  totalPages?: number;
}

export interface Result {
  posterPath?: null | string;
  adult?: boolean;
  overview?: string;
  releaseDate?: Date;
  genreIDS?: number[];
  id?: number;
  originalTitle?: string;
  originalLanguage?: OriginalLanguage;
  title?: string;
  backdropPath?: null | string;
  popularity?: number;
  voteCount?: number;
  video?: boolean;
  voteAverage?: number;
}

export enum OriginalLanguage {
  En = "en",
  It = "it",
  Zh = "zh",
}
