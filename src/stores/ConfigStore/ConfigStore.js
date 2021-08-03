import { types, flow } from "mobx-state-tree";
import { API } from '../../api';

import { ImageConfigTypes } from './ConfigStore.types';

const ConfigModel = types
  .model("ConfigStore", {
    images: ImageConfigTypes,
    state: types.enumeration("State", ['pending', 'done', 'error']),
  })
  .views(self => ({
    get baseUrl() {
      if (self.images.base_url === "") {
        self.fetchConfig()
      }
      return self.images.base_url
    },
    get secureBaseUrl() {
      if (self.images.secure_base_url === "") {
        self.fetchConfig()
      }
      return self.images.secure_base_url
    },
    sizes(type){
      if (self.images[type] === []) {
        self.fetchConfig()
      }
      return self.images[type]
    }
  }))
  .actions(self => ({
    fetchConfig: flow(function* fetchConfig() {
      self.items = {};
      self.state = "pending";
      try {
        const response = yield API.get(`/configuration`);
        self.images = response.data.images;
        self.state = 'done';
      } catch (err) {
        console.error('Failed to fetch configuration', err)
        self.state = 'error'
      }
    })
  }))

export const ConfigStore = ConfigModel.create({
  images: {},
  state: 'done',
})