import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
        setError(false);
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
      ) : (
        <>
          <img src="https://preview.redd.it/8bymt8fje2e01.jpg?width=960&crop=smart&auto=webp&v=enabled&s=8568736a8ccf3e1905eb83afe47802a068d9fecc" />
          <h1> These arent the droids youre looking for </h1>
        </>
      )}
    </div>
  );
}

export default OnePerson;
