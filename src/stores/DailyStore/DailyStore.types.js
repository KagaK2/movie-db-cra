import { types } from 'mobx-state-tree';

const DailyTrendingItemTypes = types.model({
  poster_path: types.optional(types.union(types.string, types.null), null),
  adult: types.optional(types.boolean, false),
  overview: types.optional(types.string, ""),
  release_date: types.optional(types.string, ""),
  genre_ids: types.optional(types.array(types.integer), []),
  id: types.optional(types.integer, 0),
  original_title: types.optional(types.string, ""),
  original_language: types.optional(types.string, ""),
  title: types.optional(types.string, ""),
  backdrop_path: types.optional(types.union(types.string, types.null), null),
  popularity: types.optional(types.number, 0),
  vote_count: types.optional(types.integer, 0),
  video: types.optional(types.boolean, false),
  vote_average: types.optional(types.number, 0),
})

export const DailyTrendingTypes = types.model({
  page: types.optional(types.integer, 0),
  results: types.optional(types.array(DailyTrendingItemTypes), []),
  total_pages: types.optional(types.integer, 0),
  total_results: types.optional(types.integer, 0),
})