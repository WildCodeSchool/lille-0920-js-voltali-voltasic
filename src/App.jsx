import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

import './components/Footer/Footer.css';
import ArtistsList from './components/Artists/ArtistsList';

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
      <Header />
      <ArtistsList artists={listOfArtists} />
      <Footer />
    </div>
  );
}

export default App;
