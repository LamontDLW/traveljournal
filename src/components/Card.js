import React from "react"

export default function Card(props) {
  return (
    <div className="cards">
      <div><img className="card-img" src={props.img} /></div>
      <div>
        <section className="inline-info">
          <h5>{props.location}</h5>
          <h5 className="map-link"><a href={props.mapLink} target="_blank">Google Maps</a></h5>
        </section>
    
        <h1 className="title">{props.title}</h1>
        <h4>{props.date.startDate} - {props.date.endDate}</h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
