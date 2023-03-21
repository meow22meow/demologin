import { useState } from "react"
import  {useForm} from 'react-hook-form'
import { signup } from "../Services/userservice";
import axios from "axios"

const Register = () => {
  const{register,handleSubmit,formState:{errors}}=useForm();
  const [registerDetail,setRegisterDetail]=useState("")
 
 /* const onSubmit=(data)=>
  {
    setRegisterDetail(data);
      console.log(data)   ;

//call server

//Baseurl=http://localhost:8080
//   Base_url/api/v1/auth/register
signup(data).then((response)=>
{
  console.log(response);
  console.log("success")
}).catch((error)=>
{
console.log(error)
console.log("Error")
  })
  };*/ 

  const handleChange=(event,property)=>
  {
    setRegisterDetail({...registerDetail,[property]:event.target.value})
  }

  const submit=()=>
  {
      console.log(registerDetail)

      axios.post("http://localhost:8080/api/v1/auth/register",registerDetail)
      .then((response)=>response.text())
      .then(response=>{
      console.log(response)});

      /*signup(registerDetail).then((response)=>
{
  console.log(response);
  console.log("success")
}).catch((error)=>
{
console.log(error)
console.log("Error")
  })*/
  }


  return (

    <div>
      <div className='container mt-5'>
   <div className="container form">
      <div className="row">
        
        <div className="col-lg-6 mx-auto">
          <div className="card p-3 mb-5 bg-white rounded">

  {/* <form  onSubmit={handleSubmit(onSubmit)}>*/}
   <form  >

        <h3>Register</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
     type="text"
      id="name" 
      className="form-control" 
     value={registerDetail.name}
      onChange={(event) => handleChange(event,'name')}

    /*  {...register("name",{required:
        {
          value:true,
          message: " name cannot be empty"
        }
      })}*/
      
      />
          {/*   <p className="error-message">{errors.name?.message}</p>*/}

        </div>

        

        <div className="mb-3">
          <label>Email address</label>
          <input
       type="email" 
       id="email" 
       className="form-control"
       value={registerDetail.email}
       onChange={(event) => handleChange(event,'email')}

      /* {...register("email",{required:{
        value:true,
        message: " email addressrequired"
      }
      ,pattern:{
         value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: " Invalid email address"

      }
        })}*/
       />
       {/*<p className="error-message">{errors.email?.message}</p>*/}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
     type="password"
      id="password" 
      className="form-control" 
      value={registerDetail.password}
      onChange={(event) => handleChange(event)}

      /*{...register("password",{required:
        {
          value:true,
          message: " Password cannot be empty"
        }
      })}*/
      />
    {/*<p className="error-message">{errors.password?.message}</p>*/}
        </div>

        <div className="text-center">
                <button type="submit" className="btn btn-primary button m-3" onClick={submit()}>Register </button>
              </div>
        
      </form>
      </div>
      </div>
      </div>
      </div>
   </div>
  </div>
  )
    
}


export default Register
