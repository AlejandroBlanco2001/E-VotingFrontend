import axios from 'axios'

const sendVote = () =>{
  console.log(localStorage.getItem('user'))
  if (localStorage.getItem("user")){ 
    axios
      .post(
        "/auth/checkVoteDB",
        {
          cedula: localStorage.getItem("user"),
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status == "1") {
          alert("ACABAS DE VOTAR");
        } else if(res.data.status == "0") {
          alert("YA VOTASTE UNA VEZ");
        }else{
          alert("ERROR")
        }
      });
  }else{
    alert("NO ESTAS LOGEADO")
  }
} 

const VoteCard = ({name, description, party, img}) => {

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