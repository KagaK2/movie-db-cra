import { types } from "mobx-state-tree";

export const ImageConfigTypes = types.model({
  base_url: types.optional(types.string, ""),
  secure_base_url: types.optional(types.string, ""),
  backdrop_sizes: types.optional(types.array(types.string), []),
  logo_sizes: types.optional(types.array(types.string), []),
  poster_sizes: types.optional(types.array(types.string), []),
  profile_sizes: types.optional(types.array(types.string), []),
  still_sizes: types.optional(types.array(types.string), []),
});
