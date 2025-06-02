import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../AppContext";

export default function Product() {
  const {user} = useContext(AppContext)
  return (
    <div>
      <h3>Welcome {user.name}! </h3>
      Product List
      </div>
  )
}