"use client"

import React,{ ChangeEvent, FormEvent, useState } from "react";

interface dataProp{
  username : string;
  password : string;
}
export default function Home() {

  const [data, setdata] = useState<dataProp>({
    username: "",
    password : ""
  });

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setdata({
      ...data,
      [e.target.name] : e.target.value,
    });
  }
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    console.log(data);

  }
  return (
    <div className="flex flex-row w-full h-screen border-2 border-white items-center justify-center rounded-xl overflow-hidden">
      <div className="flex text-xl w-1/2 h-full bg-gray-900 items-center justify-center">Hello</div>
      <div className="flex text-xl w-1/2 h-full items-center justify-center">
        {/* <form 
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={handleSubmit}  
        >
          <input
            type = "text"
            name = "username"
            value = {data.username}
            onChange={handleChange}
            placeholder="Username"
            className="bg-transparent border-2 placeholder-gray-500 placeholder-opacity-75 text-center"
          />        
          <input
            type = "password"
            name = "password"
            value = {data.password}
            onChange={handleChange}
            placeholder="password"
            className="bg-transparent border-2 placeholder-gray-500 placeholder-opacity-75 text-center"
          />
          <button 
            type="submit"
            className="px-4 py-1 bg-blue-600 text-white rounded-lg"
          >
            Login
          </button>
      </form> */}
      </div>
    </div>

  );
}
