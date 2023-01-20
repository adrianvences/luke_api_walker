
import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error,setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
        setError (false);
        // we have to set setError back to false like a light switch if not error stays true 
      })
      .catch((err) => { 
        console.log(err); 
        setError(true);
    });
  }, [id]);

  return (

  
    <div className="card">
      {planet && error === false ? (
        <div className="card-body">
          <h1>{planet.name}</h1>

          <p>Climate : {planet.climate} </p>
          <p>Terrain : {planet.terrain} </p>
          <p>Surface water : {planet.surface_water}</p>
          <p>Population : {planet.population}</p>
        </div> 
      ) : ( <h1> These arent the droids youre looking for </h1>
      )}
    </div>
  );
}

export default OnePlanet;

