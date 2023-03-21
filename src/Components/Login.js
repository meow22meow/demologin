import { useState } from 'react'
import { Link } from 'react-router-dom'
import  {useForm} from 'react-hook-form'

const Login = () => {
  const [loginDetail,setLoginDetail]=useState({})
const{register,handleSubmit,formState:{errors}}=useForm();

const setUsername = (event) => {
  setLoginDetail({ ...loginDetail, userName: event.target.value });

};

const setPassword=(event)=>
{
  setLoginDetail({...loginDetail,password:event.target.value});

}
  const onSubmit=(data)=>
  {
      console.log(loginDetail)   ;
       console.log(data);

   //submit data to server
  }

  /*const handleReset=()=>
  {
    setLoginDetail({userName:'',password:''});
  }*/
  return (
    < div className="container mt-5">
                <div className="col-lg-6 mx-auto">

      
      <div className="card p-3 mb-5 bg-white rounded">


      <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>

  <div className="form-outline mb-4">
    <input
       type="username" 
       id="username" 
       className="form-control"
       value={loginDetail.userName}
       onChange={(event) => setUsername(event)}

       {...register("email",{required:{
        value:true,
        message: " email addressrequired"
      }
      ,pattern:{
         value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: " Invalid email address"

      }
        })}
       />
       <p className="error-message">{errors.email?.message}</p>

    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input
     type="password"
      id="password" 
      className="form-control" 
      value={loginDetail.password}
      onChange={(event) => setPassword(event)}

      {...register("password",{required:
        {
          value:true,
          message: " Password cannot be empty"
        }
      })}
      />
    <p className="error-message">{errors.password?.message}</p>


      
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label className="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to={"/register"}><a>Register</a></Link>
        </p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default Login
