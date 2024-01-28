import React from "react";
import "../styles/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_conatiner">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home_image"
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup is a groundbreaking book by Eric Ries that has revolutionized the way entrepreneurs and businesses approach product development."
            price={250}
            image="https://5.imimg.com/data5/ANDROID/Default/2021/12/IR/JX/PA/144311324/product-jpeg-500x500.jpg"
            rating={5}
          />
          <Product
            id="98765431"
            title="The King Mixer is a powerhouse kitchen appliance that reigns supreme in versatility. With its robust motor and multiple speed settings."
            price={1150}
            image="https://4.imimg.com/data4/QI/MO/MY-3255834/bravo-hotel-king-mixer-grinder.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="98765432"
            title="The Bravia TV is a pinnacle of home entertainment, offering an unparalleled visual."
            price={30000}
            image="https://cdn1.smartprix.com/rx-iEotS5pml-w1200-h1200/EotS5pml.jpg"
            rating={2}
          />
          <Product
            id="98765433"
            title="The Milton Bottle is your go-to companion for staying hydrated on the go. Crafted with durable materials."
            price={1500}
            image="https://m.media-amazon.com/images/I/61Byq+TwA0L._AC_UF894,1000_QL80_.jpg"
            rating={5}
          />
          <Product
            id="98765434"
            title="Fogg Perfume is the epitome of captivating fragrances that leave a lasting impression."
            price={350}
            image="https://5.imimg.com/data5/SELLER/Default/2023/8/337585502/CD/MO/KJ/90447232/81tc5wowewl-sl1500-jpg.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="98765435"
            title="The Voltas AC is your gateway to unparalleled cooling comfort, combining cutting-edge technology with sleek design. Elevate your living spaces with the whisper-quiet performance and reliability of Voltas AC."
            price={25000}
            image="https://www.voltas.com/cdn/shop/articles/Adjustable_Split_AC.jpg?v=1693206035"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
