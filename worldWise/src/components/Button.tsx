import styles from './Button.module.css'

type ButtonPropsType = {
    children:React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type:string
}


export const Button = ({children,onClick,type}:ButtonPropsType) => {
  return (
    <button 
    className={`${styles.btn} ${styles[type]}`}
    onClick={onClick}
    >
        {children}
    </button>
  )
}
