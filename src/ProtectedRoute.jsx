
import { useNavigate } from 'react-router-dom' 
import { useUserAuth } from './context/UserAuthContext'
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const {user}=useUserAuth();
    console.log(user);
    if(!user){
        return navigate("/");
    }
  return children;
}

export default ProtectedRoute
