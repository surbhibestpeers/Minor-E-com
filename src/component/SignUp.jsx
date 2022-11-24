import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
 import { registration } from './Redux/actions/authAction';
// import axios from 'axios';

const SignUp = () => {

    const {register, handleSubmit, reset, formState: { errors }} = useForm();

const dispatch= useDispatch()

    const onSubmit=(data)=> {
       dispatch(registration(data))
      //   axios.post("http://localhost:8000/api/users",data)
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // })
        reset()
    }

  return (
    <div className='main'>
         <div className='signUp_main'>
            <h3 className='heading'>CREATE ACCOUNT</h3>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='input_position'>
                    <p>First Name:</p>
                    <input  {...register("firstname", {
                      required: true,
                      pattern: /^[a-zA-Z ]*$/,
                    })}
                  />
                  {errors.firstname && errors.firstname.type === "required" && (
                    <p className="errorMsg">First Name is required.</p>
                  )}
                </div>

                <div className='input_position'>
                    <p>Last Name:</p>
                    <input  {...register("lastname", {
                      required: true,
                      pattern: /^[a-zA-Z ]*$/,
                    })}
                  />
                  {errors.lastname && errors.lastname.type === "required" && (
                    <p className="errorMsg"> Last Name is required.</p>
                  )}
                </div>

                <div className='input_position'>
                    <p>Email:</p>
                    <input {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                )}
                </div>

                <div className='input_position'>
                    <p>Password:</p>
                    <input{...register("password", {
                      required: true,
                      
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="errorMsg"> Password is required.</p>
                  )}
                </div>
                <button className='white_btn ' type="submit">Submit</button>
                <p>Have Already An Account? <Link to='/signIn'>Login Here</Link></p>
            </form>
         </div>
    </div>
  )
}

export default SignUp;
