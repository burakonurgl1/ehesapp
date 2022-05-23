import './App.css';
import Navbar from './containers/Navbar/Navbar';
import MainPost from './containers/MainPost/MainPost';
import MoreButton from './components/MoreButton/MoreButton';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section className='postSection'>
        <h1 className='large-text'>Blog Posts</h1>
        <p className='main-p'>Images From E-Hesapp</p>
        <div className='postCenter'>
          <MainPost postBaslik="Deneme Post Başlık" postAciklama="Deneme Post Açıklama"></MainPost>
          <MainPost postBaslik="Deneme Post Başlık" postAciklama="Deneme Post Açıklama"></MainPost>
          <MainPost postBaslik="Deneme Post Başlık" postAciklama="Deneme Post Açıklama"></MainPost>
        </div>
        <MoreButton></MoreButton>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
