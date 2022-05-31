import "../styles/index.scss";  
import CardVote from "../components/cardVote";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Gov from "../assets/col.svg";

const Vote = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/info/candidates")
      .then((res) => {
        setData(res.data.rows);
        setLoading(false);
        console.log(loading)
      })
      .catch((err) => {
        console.error(err);
        console.log("DATABASE ERROR");
      });
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="voteSection">
      <div id="BarranquillaGov">
        <object data={Gov} alt="LogoGov"></object>
      </div>
      <div class="candidateList">
        <h2>Selecciona tu candidato</h2>
        {data.map((item, index) => {
          let {nombre, partido, imagen, descripción } = item;
          return (
            <CardVote
              key={index}
              name={nombre}
              party={partido}
              description={descripción}
              img={imagen}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vote;
