// 
import  { useEffect, useState } from "react";

import styles from "./Form.module.css";
import { Button } from "./Button";
import { BackBtn } from "./BackBtn";
import { useUrlPosition } from "../hooks/useUrlHooks";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode:string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?"


function Form() {

  const [lat,lng] = useUrlPosition();
  const {createCity,isLoading}  = useCities();

  const navigate = useNavigate()

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false)
  const [geoCodingError, setGeoCodingError] = useState('')
  const [emoji, setEmoji] = useState('')



  useEffect(()=>{

    if(!lat && !lng) return 

    async function fetchCityData(){
      try {
        setIsLoadingGeoCoding(true)
        const res = await fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`)
        const data = await res.json()


        if(!data.countryCode){

         throw new Error(`That doesn't seem to be a city Name.click somewhere else`)
        }

        setGeoCodingError('')
        setCityName(data.city || data.locality || '')
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
      } catch (error: unknown) {
        if (error instanceof Error) {
          setGeoCodingError(error.message);
        } else {
          setGeoCodingError("An unknown error occurred.");
        }
      }
      finally{
        setIsLoadingGeoCoding(false)
      }
    }
    fetchCityData()
  },[lat,lng])

  // const newD =  newCity.date?.toDateString()
  
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const newCity = {
      cityName,
      country,
      emoji,
      date: date instanceof Date ? date.toISOString() : '',
      notes,
      position:{lat,lng}
    }

    await createCity(newCity)

     navigate('/app/cities')
  }

  if(isLoadingGeoCoding) return <Spinner/>

  if(!lat && !lng) return <Message message="Start by clicking somewhere on thr map"/>

  if(geoCodingError) return <Message message={geoCodingError}/>

  return (
    <form className={`${styles.form }${isLoading ? styles.loading:''}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        
        <DatePicker
        id="Date"
         onChange={date=>setDate(date) }
          selected={date}
           dateFormat='dd/MM/yyyy'/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName} {country}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" onClick={()=>console.log('first')}>Add</Button>
        <BackBtn/>
      </div>
    </form>
  );
}

export default Form;


//f