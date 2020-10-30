import './artists.css';

function Artists({ ...artistInfo }) {
  const infoArtist = artistInfo;
  return (
    <div className="artists-main">
      <div
        className="artists-image"
        style={{ backgroundImage: `url(${infoArtist.artistInfo.image})` }}
      />
      <h3>{infoArtist.artistInfo.name}</h3>
    </div>
  );
}

export default Artists;
