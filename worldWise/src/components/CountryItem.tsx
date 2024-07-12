import styles from "./CountryItem.module.css";

type CountryItemType = {
  country:string
  emoji:string
}

function CountryItem({ country,emoji }:CountryItemType) {
  
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
