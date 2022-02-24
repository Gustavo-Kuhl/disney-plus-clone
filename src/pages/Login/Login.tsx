import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { LoginContainer, Button } from "./style";
import disneyLogo from "../../assets/disney-plus.svg";

const Login = () => {

  const {setIsLogged}= useContext(LoginContext);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = (): void => {
    signInWithPopup(auth, provider)
      .then((res) => {
        if (res.user.emailVerified === true) {
          setIsLogged(true)
          navigate("/home");
        } else {
          console.log("user not authenticated!");
          setIsLogged(false)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContainer>
      <img src={disneyLogo}></img>
      <Button onClick={loginWithGoogle}>Login with google</Button>
    </LoginContainer>
  );
};

export { Login };
