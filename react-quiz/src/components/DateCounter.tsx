import { ChangeEvent, useReducer } from "react";



type State = {
    count:number
    step:number
}

type Action={
    type:string
    payload:number

}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'INC':
        return { ...state, count: state.count + state.step };
      case 'DEC':
        return { ...state, count: state.count - state.step };
      case 'SET_COUNT':
        return { ...state, count: action.payload };
      case 'RESET':
        return { ...state, count: 0 ,step:0};
      case 'SET_STEP':
        return { ...state, step: action.payload };
      default:
        return state;
    }
  };
function DateCounter() {
//  react quiz loading fake timeout interval interval the timer one big reducer 

const initalState = {count:0,step:1}

  const [state, dispatch] = useReducer(reducer,initalState)


  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({type:"DEC",payload:-1})
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type:"INC",payload:1})
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e:ChangeEvent<HTMLInputElement>) {
    dispatch({type:'SET_COUNT',payload:Number(e.target.value)})
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e:ChangeEvent<HTMLInputElement>) {
    dispatch({type:"SET_STEP",payload:Number(e.target.value)})
  };

  const reset = function () {
    // setCount(0);
    dispatch({type:"RESET",payload:0})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count}
         onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;


// ok usereducer more advance and more complex jjbjj




// import { Forecast, Header, Population, Temperature } from "../Components";
// import { fetchData } from "../services/weatherService";
// import { toast } from "react-toastify";
// import { Button } from "../Components/Button";
// import { useEffect, useReducer } from "react";
// import { initialPopulation } from "../assets/data";
// import { CurrentWeatherType, weatherDataType } from "../types";

// type State = {
//   city: string;
//   loading: boolean;
//   location: any; // Define the type according to your data structure
//   currentWeather: CurrentWeatherType | undefined;
//   isDay: boolean;
//   forecasts: any; // Define the type according to your data structure
//   isWeather: boolean;
//   populations: any; // Define the type according to your data structure
//   coords: {
//     latitude: number;
//     longitude: number;
//   };
// };

// type Action =
//   | { type: 'SET_CITY'; payload: string }
//   | { type: 'SET_LOADING'; payload: boolean }
//   | { type: 'SET_LOCATION'; payload: any } // Define the type according to your data structure
//   | { type: 'SET_CURRENT_WEATHER'; payload: CurrentWeatherType }
//   | { type: 'SET_IS_DAY'; payload: boolean }
//   | { type: 'SET_FORECASTS'; payload: any } // Define the type according to your data structure
//   | { type: 'SET_IS_WEATHER'; payload: boolean }
//   | { type: 'SET_POPULATIONS'; payload: any } // Define the type according to your data structure
//   | { type: 'SET_COORDS'; payload: { latitude: number; longitude: number } };

// const initialState: State = {
//   city: "alaska",
//   loading: true,
//   location: undefined,
//   currentWeather: undefined,
//   isDay: true,
//   forecasts: undefined,
//   isWeather: true,
//   populations: initialPopulation,
//   coords: {
//     latitude: 0,
//     longitude: 0,
//   },
// };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'SET_CITY':
//       return { ...state, city: action.payload };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_LOCATION':
//       return { ...state, location: action.payload };
//     case 'SET_CURRENT_WEATHER':
//       return { ...state, currentWeather: action.payload };
//     case 'SET_IS_DAY':
//       return { ...state, isDay: action.payload };
//     case 'SET_FORECASTS':
//       return { ...state, forecasts: action.payload };
//     case 'SET_IS_WEATHER':
//       return { ...state, isWeather: action.payload };
//     case 'SET_POPULATIONS':
//       return { ...state, populations: action.payload };
//     case 'SET_COORDS':
//       return { ...state, coords: action.payload };
//     default:
//       return state;
//   }
// };

// export const CityPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchInitial = async () => {
//       try {
//         await fetchWeather({ city: state.city });
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to fetch weather data.");
//       }
//     };

//     fetchInitial();
//   }, [state.city]);

//   const fetchWeather = async (data: weatherDataType) => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const weatherResponse = await fetchData(data);
//       if (weatherResponse.status) {
//         dispatch({ type: 'SET_LOCATION', payload: weatherResponse.data.location });
//         dispatch({ type: 'SET_CURRENT_WEATHER', payload: weatherResponse.data.currentWeather });
//         dispatch({ type: 'SET_IS_DAY', payload: weatherResponse.data.location.isDay });
//         dispatch({ type: 'SET_FORECASTS', payload: weatherResponse.data.forecast });
//         dispatch({ type: 'SET_POPULATIONS', payload: weatherResponse.data.population });
//         dispatch({ type: 'SET_LOADING', payload: false });
//       } else {
//         toast.error(weatherResponse.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch weather data.");
//     }
//   };

//   const handleCityChange = (city: string) => {
//     dispatch({ type: 'SET_CITY', payload: city });
//   };

//   const handleSubmit = async () => {
//     const trimmedCity = state.city.trim();

//     if (trimmedCity === "" || typeof trimmedCity !== "string") {
//       toast.error("Please enter a valid city name");
//       return;
//     }

//     await fetchWeather({ city: trimmedCity });
//   };

//   const onDataChange = () => {
//     if (state.populations.status) {
//       dispatch({ type: 'SET_IS_WEATHER', payload: !state.isWeather });
//     } else {
//       toast.error(state.populations.message);
//     }
//   };

//   const getGeoLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const coords = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };
//         dispatch({ type: 'SET_COORDS', payload: coords });
//         fetchWeather(coords);
//       });
//     } else {
//       console.log("Geolocation is not available in your browser.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen w-screen bg-bgMain bg-cover bg-no-repeat">
//       {state.loading ? (
//         <div className="text-white text-lg">Loading...</div>
//       ) : (
//         <div
//           className={`bg-cover p-14 rounded-lg bg-blue-500 max-w-[900px] ${
//             state.isDay ? "bg-day" : "bg-night"
//           }`}
//         >
//           <Header
//             city={state.city}
//             location={state.location}
//             handleChangeCity={handleCityChange}
//             onSubmitCity={handleSubmit}
//             onUserLocation={getGeoLocation}
//           />
//           <Temperature current={state.currentWeather} />
//           {state.isWeather ? (
//             <Forecast forecasts={state.forecasts} isDay={state.isDay} />
//           ) : (
//             <Population populations={state.populations} />
//           )}
//           <Button isWeather={state.isWeather} onDataChange={onDataChange} />
//         </div>
//       )}
//     </div>
//   );
// };