import React, {useState} from 'react';
import './Login_logout.css'

const Login_logout = () => {

    const [btnname, changename] = useState(false);
    const [content, setcontent] = useState(' Public Views');

    const changebtn = () => {
        changename(!btnname);
        setcontent(btnname ? 'Public Views' : 'Private Views');
    }

  return (
      <>
      
        <div className="navbox">
            <div className="nav">
                <h3> Navigation </h3>
                <button onClick={changebtn}> {btnname ? 'Logout' : 'Login'} </button>
            </div>      
            <div className="views">
                <h3> {content} </h3>
            </div>      
            <div className="footer">
                <h3> Footer </h3>
            </div>      
        </div>
      
      </>
  )
}

export default Login_logout