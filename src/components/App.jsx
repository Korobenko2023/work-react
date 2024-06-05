import React from "react";
import { Header } from "./Header/Header";
import { Counter } from "./Counter/Counter";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Counter/>
    </div>
  )
}


