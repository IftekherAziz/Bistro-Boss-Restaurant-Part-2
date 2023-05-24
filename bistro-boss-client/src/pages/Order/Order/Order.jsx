import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderFood from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      {/* Main Cover Section */}
      <Cover
        img={orderFood}
        title="Our Shop"
        subTitle="Would you like to try a dish? Order your favourite dish from our shop.Enjoy you meal with Bistro Boss"
      ></Cover>
      {/* Shop by Category Section */}
      <div className="my-14 mx-10 md:mx-40 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderCard items={salads}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={pizzas}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={soups}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={desserts}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={drinks}></OrderCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
