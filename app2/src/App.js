import './App.css';
import Header from '../src/components/header/index';
import Nav from '../src/components/nav/index';
import Hero from '../src/components/hero-div';
import Banner from '../src/components/banner/index';
import DonateInfo from '../src/components/donate-info/index';
import Banner2 from '../src/components/banner2/index';
import Card1 from './components/cards/card1';
import Listing_react from './components/misc_component/listing_react';
import Card2 from './components/cards/card2';
import Hero2 from './components/hero2/index';
import Form from './components/form/index';
import Teamslider from './components/misc_component/teamslider';
import Banner3 from './components/banner3/index';
import Banner5 from './components/banner5/index'
import Fnavbar from './components/nav/fnav';
import Footer from '../src/components/footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Banner />
      <DonateInfo />
      <Banner2 />
      <Card1 />
      <Listing_react />
      <Banner3 />
      <Card2 />
      <Hero2 />
      <Form />
      <Teamslider />
      <Banner5 />
      <Fnavbar />
      <Footer />
      </>
  );
}

export default App;