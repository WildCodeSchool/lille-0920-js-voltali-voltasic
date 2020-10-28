import ArtistsList from './components/Artists/ArtistsList';

import './App.css';

import eminem from '../public/photos/eminem.jpg';
import jul from '../public/photos/jul-feat.jpg';
import bobMarley from '../public/photos/bob*.jpg';
import ayaNakamura from '../public/photos/Aya-Nakamura.jpg';

const listOfArtists = [
  {
    name: 'Eminem',
    image: `${eminem}`,
  },
  {
    name: 'JUL',
    image: `${jul}`,
  },
  {
    name: 'Bob Marley',
    image: `${bobMarley}`,
  },
  {
    name: 'Aya Nakamura',
    image: `${ayaNakamura}`,
  },
];

function App() {
  return (
    <div className="container">
      <ArtistsList artists={listOfArtists} />
    </div>
  );
}

export default App;
