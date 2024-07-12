import { useCities } from '../contexts/CitiesContext';
import { CityItem } from './CityItem';
import styles from './CityList.module.css'
import Message from './Message';
import Spinner from './Spinner';




export const CityList = () => {

  const {cities,isLoading} = useCities()

  console.log(cities)

    if(isLoading) return <Spinner/>

    if(!cities.length) return <Message message={"Add your fist city by clicking on a city on thr map"}/>

  return (
    <ul className={styles.cityList}>
        {cities.map(city=>(
            <CityItem city={city} key={city.id}/>
        ))}
    </ul>
  )
}
