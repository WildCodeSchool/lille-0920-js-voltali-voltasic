import Artists from './Artists';
import './artistsList.css';

const ArtistsList = ({ ...artists }) => {
  const artist = artists;
  return (
    <div className="artistslist-main">
      <h1>Most listened artists</h1>
      <div className="artistslist-display-artists">
        {artist.artists.map((item) => (
          <Artists artistInfo={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsList;
