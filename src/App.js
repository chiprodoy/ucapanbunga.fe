import Header from './component/Header';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/styles.css';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
import Order from './component/Order';

function App() {
  return (
    <div class='main'>
      <Header />
      <Portfolio />
      <Order />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
