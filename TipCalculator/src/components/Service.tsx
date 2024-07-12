import { ReactElement } from "react";

type childernProps = {
  children: ReactElement;
  setRated : React.Dispatch<React.SetStateAction<number>>
  rated:number
};

function Service({ children,setRated,rated }: childernProps) {
  return (
    <div>
      {children}

      <select value={rated} onChange={(e)=>setRated(Number(e.target.value))} >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>it was okay (5%)</option>
        <option value={10}>it was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Service;
