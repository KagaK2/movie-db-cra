import PosterThumbnail from "../PosterThumbnail";
import styles from './PosterThumbnailList.module.scss';

const PosterThumbnailList = (props) => {
  return (
    <div className={styles.posterlist__container}>
      {props.items.map(item => (
        <PosterThumbnail key={item.id} src={item.poster_path} alt={item.title} />
      ))}
    </div> 
  );
};

export default PosterThumbnailList;
