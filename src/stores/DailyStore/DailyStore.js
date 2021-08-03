import { types, flow } from 'mobx-state-tree';
import { API } from '../../api';

import { DailyTrendingTypes } from './DailyStore.types';

const DailyModel = types
  .model("DailyStore", {
    items: DailyTrendingTypes,
    weeklyItems: DailyTrendingTypes,
    state: types.enumeration("State", ['pending', 'done', 'error']),
    currentPage: types.number = 1,
    totalPage: types.number,
  })
  .actions(self => ({
    fetchTrending: flow(function* fetchTrending() {
      self.items = {};
      self.state = "pending";
      try {
        const response = yield API.get(`/trending/movie/day`);
        self.items = response.data;
        self.state = 'done';
      } catch (err) {
        console.error('Failed to fetch trending movies', err)
        self.state = 'error'
      }
    }),
    fetchWeeklyTrending: flow(function* fetchWeeklyTrending(){
      self.items = {};
      self.state = "pending";
      try {
        const response = yield API.get(`/trending/movie/week`);
        self.weeklyItems = response.data;
        self.state = 'done';
      } catch (err) {
        console.error('Failed to fetch trending movies', err)
        self.state = 'error'
      }
    })
  }))

export const DailyStore = DailyModel.create({
  items: {},
  weeklyItems: {},
  state: 'done',
})