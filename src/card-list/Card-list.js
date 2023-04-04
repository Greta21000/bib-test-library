import React from 'react'
import CardItem from '../card-item/Card-item'
import "./Card-list.css"


const CardList = (props) => {
  console.log(props.oeuvres)
  return (
    <div className='card-list' >
        {props.oeuvres.map(oeuvreItem => (
            <CardItem key={oeuvreItem.id} oeuvre={oeuvreItem} />
        )
            )}
    </div>
  )
}

export default CardList