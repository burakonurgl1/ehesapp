import './Anasayfa.css';
import Navbar from './containers/Navbar/Navbar';
import PostGetir from './containers/PostGetir/PostGetir';
import MoreButton from './components/MoreButton/MoreButton';
import Footer from './containers/Footer/Footer';

function Anasayfa() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <section className='postSection'>
        <h1 className='large-text'>Blog Posts</h1>
        <p className='main-p'>Images From E-Hesapp</p>
        <div className='container'>
          <div className='row'>
          <PostGetir></PostGetir>
          </div>
        </div>
        <MoreButton></MoreButton>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Anasayfa;
