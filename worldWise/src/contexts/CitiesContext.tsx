import { createContext, useContext, useEffect, useReducer } from "react";
import { ActionType, CityListPropsType, CityType, StateType } from "../types";

type CitiesProviderType = {
  children: React.ReactNode;
};

const initalContext = {
  cities: [],
  isLoading: false,
  currentCity: {
    cityName: "",
    country: "",
    date: "",
    emoji: "",
    id: "",
    notes: "",
    position: {
      lat: 0,
      lng: 0,
    },
  },
  getCity: () => {},
  createCity: () => {},
  deleteCity: () => {},
};
const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {
    cityName: "",
    country: "",
    date: "",
    emoji: "",
    id: "",
    notes: "",
    position: {
      lat: 0,
      lng: 0,
    },
  },
  error: "",
};

const CitiesContext = createContext<CityListPropsType>(initalContext);
const BASE_URL = "http://localhost:8000";

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: initalState.currentCity,
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unkown action type");
  }
};

const CitiesProvider = ({ children }: CitiesProviderType) => {
  const [{ cities, currentCity, isLoading }, dispatch] = useReducer(
    reducer,
    initalState
  );

  useEffect(() => {
    const fethCities = async () => {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was a error loading data",
        });
      }
    };
    fethCities();
  }, []);

  

  async function getCity(id: string) {
    if(id === currentCity.id) return
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "there was a error loading data" });
    }
  }

  async function createCity(newCity: CityType) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "there was a error loading data" });
    }
  }
  async function deleteCity(id: string) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "there was a error loading data" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context must be used within the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };

//jnall the dispatch to up
