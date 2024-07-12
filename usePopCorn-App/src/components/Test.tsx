import React, { useState } from 'react'
import { StarRating } from './StarRating'

export const test = () => {
    const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
        <StarRating size={40} color='green' maxRating={7} onSetRating={setMovieRating} />


    </div>
  )
}
