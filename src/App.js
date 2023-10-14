import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Container from "./components/Categories";
/**
 *  --Header
 *    -Logo
 *    -NavBar
 *  --Images
 *     -Sldeshow
 *  --Categories
 *     -Food
 *     -Accesories
 *     -Essentials
 *
 *  --Footer
 *    -Links
 *    -Copyrights
 *
 */

const AppLayout = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <Container />
      <Container />
      <Container />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
