import React from "react";
import { useEffect ,useState} from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header"
import HeroSlider from "../components/HeroSlider";
import NewsLetter from "../components/NewsLetter";
import Shop from "../components/Shop";

function Home() {
// inside component:

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
console.log(scrollPosition)

  


  return (
    <>
    <Header />
      <HeroSlider />
      <Categories />
      <Shop />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
