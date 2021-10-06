import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function Home() {
  const [count, setCount] = useState(0);
  const carousel = [
    "https://m.media-amazon.com/images/I/71D7LpKHvfL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71-7ieKmvcL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/716fMGhcfAL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61RvpTFjOXL._SX3000_.jpg",
  ];
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__carousel">
          <NavigateBeforeIcon
            className="home__carouselPrev"
            onClick={() => setCount(count - 1 < 0 ? 3 : count - 1)}
          />
          <NavigateNextIcon
            className="home__carouselNex"
            onClick={() => setCount(count + 1 > 3 ? 0 : count + 1)}
          />
          <img className="home__image" src={carousel[count]} alt="" />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
