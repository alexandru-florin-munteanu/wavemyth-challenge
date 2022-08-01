import React from "react";

import Header from "./components/Header";
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import "./components/utils.scss";
import "./App.scss";

export const CartContext = React.createContext([]);

function App() {
  return (
    <div className="App">
      <Header />
      <MainView />
      <Footer />
    </div>
  );
}

export default App;
