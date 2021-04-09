import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
