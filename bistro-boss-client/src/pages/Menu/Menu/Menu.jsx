import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <section className="mb-12 mx-10 md:mx-40">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={dessertImg}
        title="Desserts"
        subTitle="Desserts are delectable treats that satisfy your sweet tooth. From cakes to cookies, ice cream to pies, they offer a delightful indulgence and a perfect ending to any meal."
      ></Cover>
      <section className="mb-12 mx-10 md:mx-40">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={pizzaImg}
        title="Pizza"
        subTitle="Pizza, a beloved culinary creation, combines a crispy crust with savory tomato sauce and a variety of toppings. Its irresistible flavors, gooey cheese, and satisfying chew make it a timeless favorite worldwide."
      ></Cover>
      <section className="mb-12 mx-10 md:mx-40">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={saladImg}
        title="Salad"
        subTitle="Salads are refreshing and healthy culinary creations that offer a burst of flavors and textures. With a vibrant mix of fresh greens, vegetables, fruits, and dressings, they provide a nourishing and satisfying dining experience."
      ></Cover>
      <section className="mb-12 mx-10 md:mx-40">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={soupImg}
        title="Soup"
        subTitle="Soup, a comforting and versatile dish, warms both body and soul. Whether creamy or broth-based, it combines wholesome ingredients, herbs, and spices to create a flavorful and nourishing bowl of goodness."
      ></Cover>
      <section className="mb-12 mx-10 md:mx-40">
        <PopularMenu></PopularMenu>
      </section>
    </div>
  );
};

export default Menu;
