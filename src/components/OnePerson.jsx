import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error,setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
        setError (false);
      })
      .catch((err) => { 
      console.log(err);
      setError(true);
      
      });
  }, [id]);

  return (
    <div className="card">
      {person && error === false ? (
        <div className="card-body">
          <h1>{person.name}</h1>

          <p>Height : {person.height} </p>
          <p>Mass : {person.mass} </p>
          <p>Hair Color : {person.hair_color}</p>
          <p>Skin Color : {person.skin_color}</p>
        </div>
      ) :( 
        <>
      <img src='./public/obi_juan.webp' />
      <h1> These arent the droids youre looking for </h1>
        </>
      )}
    </div>
  );
}

export default OnePerson;
