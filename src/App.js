import './App.css';
import Footer from './layouts/Footer';
import Logo from './layouts/Logo';
import Faq from './layouts/Faq';
import JoinCommunity from './layouts/JoinCommunity';
import WhyWeAreBest from './layouts/WhyWeAreBest';
import Courses from './layouts/Courses';

function App() {
  return (
    <div className="App">
      <Logo />
      <WhyWeAreBest />
      <Courses />
      <JoinCommunity />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
