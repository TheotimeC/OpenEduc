import axios from 'axios';


  
 function verifie(userID) {

        var res;
        
        axios.post('http://localhost:3001/api/roleVerifie', {
            userId: userID,
        }).then((response) => {
           // response.send(userID);

            if(response.data.message){

                console.log(response.data.message)

            }else{

                res = response.data[0].role;
                //console.log(res)

               

            }
        })

        return (res)

    };

  

  

  
  export default verifie;