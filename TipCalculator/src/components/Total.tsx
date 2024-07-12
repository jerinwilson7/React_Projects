type TotalProps = {
    bill:number 
    selfRated:number
    friendRated:number
}


function Total({bill,friendRated,selfRated}:TotalProps) {

    const averageRating = (((selfRated + friendRated )/2)/100)*bill
    const total = (bill + averageRating)

  return (
    <div>
        <h2>{`You pay $${total} ($${bill} + $${averageRating} tip)`}</h2>
    </div>
  )
}

export default Total