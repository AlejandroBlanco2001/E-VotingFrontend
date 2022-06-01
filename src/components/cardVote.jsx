import axios from 'axios'
import swal from 'sweetalert2';
import {ethers} from 'ethers'
import { useNavigate } from 'react-router-dom'


const VoteCard = ({name, description, party, img}) => {
  const navigate = useNavigate();

  const sendVote = () => {
    if (localStorage.getItem("user")) {
      axios
        .post(
          "/auth/checkVoteDB",
          {
            cedula: localStorage.getItem("user"),
            candidato: ethers.utils.formatBytes32String(name)
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.status === 1) {
            localStorage.removeItem('user')
            swal.fire({
              icon: "succesfull",
              title: "Thanks",
              timer: 12000,
              text: "Tu voto ha sido registrado, muchas gracias por ejercer tu derecho al voto",
              showConfirmButton: false,
            });
            navigate("../resultado", { replace: true });
          } else if (res.data.status === 0) {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "¡Ya has votado una vez, no puedes volver a votar!",
              timer: 8000,
              showConfirmButton: false,
            });
          } else {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal!",
              timer: 8000,
              showConfirmButton: false,
            });
          }
        });
    } else {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Para votar, debes ingresar sesion",
        timer: 8000,
        showConfirmButton: false,
      });
    }
  }; 

    return (
      <div>
        <div class="candidatesCard" onClick={sendVote}>
          <div class="imageContainer">
            <img src={img} alt="candidate"></img>
          </div>
          <div class="candidateText">
            <h3>{name}</h3>
            <span>{party}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default VoteCard