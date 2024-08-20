
import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Footer from './Footer';
import { useHistory } from "react-router-dom";

const Login = () => {
    const[values, setValue] = useState({})
    const [showloader, setshowLoader] = useState(false);
    let history = useHistory()
    

    const onChange = (event, {name, value}) => {
        setValue({
            ...values,
            [name]: value
        })
    }
    const onSubmithandler = (e) => {
        e.preventDefault();
        
        setshowLoader(true);
    
        fetch("https://expressbackend.herokuapp.com/api/v1/login", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(
            (res) => {
              if (res.success) {
                setshowLoader(false);
                history.push("/dashboarddefault");
              } else if (res.failure) {
                // display
                alert("Wrong Username or Password");
                setshowLoader(false);
              } else if (res.goaway) {
                alert("User Doesn't Exist");
                setshowLoader(false);
              }
            },
            (err) => console.log(err)
          );

    }
   

    return (
        <div>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={onChange}/>
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChange}/>
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        {/* <Footer /> */}
        </div>
    );
};

export default Login;