import React from "react";
import { useState, useEffect } from 'react';

function Card(props){

  const[name, updateName]= useState (props.name)

  useEffect (() => {
    console.log(name)
  })
  
  function changeName (){
    updateName (name.toLowerCase())
  }
    
  return (
    <div onClick={changeName} className="sector">
      <div className="contenedor" id="contenedor">
        <h1 className="contenedor__titulo">Curso</h1>
        <div className="contenedor__cursos" id="contenedor__cursos"></div>
      </div>
      <div className="tarjeta">
        <div className="tarjeta__imagen">
          <img className="tarjeta__imagen-background"
          src={props.background}
          alt={props.name}
          />
          <img className="tarjeta__imagen-icono"
          src={props.icon}
          alt={props.name}
          />
        </div>
        <div className="tarjeta__parrafo">
          <h3 className="tarjeta__titulo"> {props.name}</h3>
          <h3 className="tarjeta__texto">totalQuizzes: {props.totalQuizzes}</h3>
          <h3 className="tarjeta__texto">users: {props.users}</h3>
          <h3 className="tarjeta__texto">id: {props.id}</h3>
          <h3 className="tarjeta__texto">level : {props.level}</h3>
          <h3 className="tarjeta__texto">companyCode: {props.companyCode}</h3>
          <h3 className="tarjeta__texto"> bootcamp : {props.bootcamp}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card;