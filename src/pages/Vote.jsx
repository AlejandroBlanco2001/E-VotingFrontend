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
        setData(res.data.fields);
        setLoading(false);
        console.log(res)
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
          let { name, party, description, image } = item;
          return (
            <CardVote
              key={item}
              name={name}
              party={party}
              description={description}
              img={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vote;
