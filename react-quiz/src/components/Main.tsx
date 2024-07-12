
type MainTypes = {
    children:React.ReactNode
}


export const Main = ({children}:MainTypes) => {
  return (
    <main className="main">
        {children}
    </main>
  )
}
