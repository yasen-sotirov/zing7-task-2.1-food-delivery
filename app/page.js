/*  ==App
Home страницата на проекта 
https://www.youtube.com/watch?v=GDd2c70gsxE&ab_channel=CodeCommerce  */

import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeadlinrCards from "./components/HeadlinrCards";
import Foods from "./components/Foods";
import Category from "./components/Category";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <HeadlinrCards />
      <Foods />
      <Category />
    </div>
  );
}
