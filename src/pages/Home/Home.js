import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { DailyStore } from '../../stores/DailyStore/DailyStore';

import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Typography from '../../components/Typography';
import PosterThumbnailList from '../../components/PosterThumbnailList/PosterThumbnailList';

import styles from './Home.module.scss';

const Home = () => {

  useEffect(() => {
    const fetchTrending = async () => {
      await DailyStore.fetchTrending();
    }
    fetchTrending()
  },[])

  useEffect(() => {
    const fetchWeeklyTrending = async () => {
      await DailyStore.fetchWeeklyTrending();
    }
    fetchWeeklyTrending()
  },[])

  return (
    <div className={styles.home__container}>
      <Navbar />
      <Banner movies={DailyStore.items.results.slice(0,3)}/>
      <div>
        <Typography tag="h5" variant="title-desktop">Trending daily</Typography>
        <PosterThumbnailList items={DailyStore.items.results} />
      </div>
      
      <div>
        <Typography tag="h5" variant="title-desktop">Trending Weekly</Typography>
        <PosterThumbnailList items={DailyStore.weeklyItems.results} />
      </div>
    </div>
  )
}

export default observer(Home);