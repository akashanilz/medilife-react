import axios from '../axios';
import React, { useEffect } from 'react'
import './Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import { css } from "@emotion/react";

function Login() {
  const override = css`
  display: block;
  margin: 2 auto;
  size:30;`;
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("red");
  const history =useHistory();
  useEffect(() => {
       if(localStorage.getItem("token")){
         history.push("/dashboard")
       }
  }, [])
  const [loader, setLoader] = useState(true)
     const [shimmer, setShimmer] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const handleSubmit = (e)=>{
      setLoading(true);
            e.preventDefault();
            const data = {
                password:password,
                email:email
            }
            axios.post("/login",data).then((response)=>{
               console.log(response.data)
                console.log(response.status);
                if(response.status===200){
                  localStorage.setItem("token",JSON.stringify(response.data));
                  history.push("/dashboard")
                }
                
            }).catch(err=>{
              setLoading(false)
              console.log(err.code)
            })
    }
    return (
        <div>
        <div className="min-h-screen flex  justify-center bg-gray-50 py-12 px-1 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://covidpcrtestathome.com/images/1.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div> */}

            {/* <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div> */}
          </div>

          <div>
            {loading ?   <button  disabled={true}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign in
            </button> :<button 
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign in
            </button>}
         
          
          </div>
         <div className="flex justify-center">
         {loader && <BeatLoader color={color} loading={loading} css={override}  size={20} /> }
         </div>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Login
