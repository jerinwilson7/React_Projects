import React from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./components/StarRating";
// import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="red" defaultRating={3}/>
    <StarRating className="test" />
  </React.StrictMode>
);
