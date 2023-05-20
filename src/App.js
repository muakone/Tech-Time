import './App.css';
import Footer from './layouts/Footer';
import Logo from './layouts/Logo';
import Faq from './layouts/Faq';
import JoinCommunity from './layouts/JoinCommunity';
import WhyWeAreBest from './layouts/WhyWeAreBest';
import Courses from './layouts/Courses';
import Quality from './layouts/Quality';
import HeroBg from './layouts/HeroBg';

function App() {
  return (
    <div className="App">
      <HeroBg />
      <Logo />
      <Quality />
      <WhyWeAreBest />
      <Courses />
      <JoinCommunity />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
