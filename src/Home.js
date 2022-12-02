import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext, useGlobalContext } from "./context"

// you can either useContext and grab that specific context "AppContext", or you can do it as we have now with the useGlobalContext hook invoked

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
