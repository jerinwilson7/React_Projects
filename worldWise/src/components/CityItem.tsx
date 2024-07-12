import { Link } from "react-router-dom"
import { CityType } from "../types"
import styles from './CityItem.module.css'
import { useCities } from "../contexts/CitiesContext"

const formatDate = (date:string | 0) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date))


type CityItemPropsType = {
    city:CityType
}
export const CityItem = ({city}:CityItemPropsType) => {

    const {currentCity,deleteCity} = useCities()
    const {cityName,emoji,date,id,position} = city

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      if(id)
       deleteCity(id)
    }

  return (
    <li>
        <Link 
        to={`${id}?lat=${position.lat}&lng=${position.lng}`} 
        className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active']:''}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button 
        className={styles.deleteBtn}
        onClick={handleDelete}
        >&times;</button>
        </Link>
    </li>
  )
}

 //kjn 