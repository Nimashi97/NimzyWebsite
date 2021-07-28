import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Content1 from './components/content1/Content1';
import Footer from './components/footer/Footer';
import Content2 from './components/content2/Content2';
import Content3 from './components/content3/Content3';



function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Banner></Banner>
      <Content1></Content1>
      <Content2></Content2>
      <Content3></Content3>
      <Footer></Footer>
    </div>
  );
}

export default App;
