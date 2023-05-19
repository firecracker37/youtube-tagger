import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'

const HeaderNav = () => {
  return (
    <header className="w-full h-auto flex justify-between items-center bg-slate-950 text-white px-4 py-2">
        <h1 className="text-3xl font-bolder pl-8">YouTube Tagger</h1>
        <AuthButton  />
    </header>
  )
}

export default HeaderNav