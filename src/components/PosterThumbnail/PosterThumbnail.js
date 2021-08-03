import { observer } from 'mobx-react';
import { ConfigStore } from '../../stores/ConfigStore/ConfigStore';

const PosterThumbnail = (props) => {
  const baseUrl = ConfigStore.baseUrl;
  const posterSizes = ConfigStore.sizes("poster_sizes");
  return (
    <div>
      <img src={`${baseUrl}${posterSizes[2]}${props.src}`} alt={props.alt} />
    </div>
  );
};

export default observer(PosterThumbnail);
