


import { useCities } from '../contexts/CitiesContext';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css'
import Message from './Message';
import Spinner from './Spinner';




export const CountryList = () => {

    const {cities,isLoading} = useCities()

    if(isLoading) return <Spinner/>

    if(!cities.length) return <Message message={"Add your fist county by clicking on a city on thr map"}/>


   

    const countries = cities.reduce((arr, city) => {
      const countryExists = arr.some((el) => el.country === city.country);
  
      if (!countryExists) {
          arr.push({ country: city.country, emoji: city.emoji });
      }
  
      return arr;
  }, [] as { country: string; emoji: string }[]);
  
  return (
    <ul className={styles.countryList}>
        {countries.map(country=>(
            <CountryItem country={country.country} emoji={country.emoji} key={country.country}/>
        ))}
    </ul>
  )
}


// zxcdfdfsdcscc dkfdf