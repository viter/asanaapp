import { useEffect, useState } from "react";
import { getCookie } from "./utils/getcookie";
import axios from "axios";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const token = getCookie('token');
    //console.log(token);
    axios.get("http://localhost:3080/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
    <div className="App text-center container-fluid">
      
      {!loggedIn ? (
        <>
         
          <h1 className="h3 mb-3 font-weight-normal">Sign in with Asana</h1>
          <a
            type="primary"
            className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded"
            size="lg"
            href="https://app.asana.com/-/oauth_authorize?client_id=1201183379932380&response_type=code&redirect_uri=http://localhost:3080/oauth_callback"
          >
            Sign in
          </a>
        </>
      ) : (
        <>
        
          <h1>Welcome!</h1>
          <p>
            This is a simple integration between OAuth2 on GitHub with Node.js
          </p>

             
                  Hello { user.name} 
                 
                 
               
              
        </>
      )}
    </div>
    </div>
  );
}

export default App;
