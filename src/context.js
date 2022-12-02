import React, { useState, useContext } from "react"

const AppContext = React.createContext()

//we need to pass in the children since we need to understand that that we will wrap our whole app in app provider so if we want pass this children "yeah get me this children prom and then return children inside of our compontent we wont be able to see any thing  "
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  const [isModalOpen, setisModalOpen] = useState(false)

  const openSidebar = () => {
    setisSidebarOpen(true)
  }
  const closeSidebar = () => {
    setisSidebarOpen(false)
  }
  const openModal = () => {
    setisModalOpen(true)
  }
  const closeModal = () => {
    setisModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {" "}
      {children}
    </AppContext.Provider>
  )
}

//!!! You have to access the children in the componet which wropup your app and also dispaly the children, otherwise nothing will be displayes

// as we setUp our context we can now access the value in ALL our components! (including App)

//we want to export AppContext bc useContext will be looking for that + AppProvider

//ho we can use use context in any componets
// or custom hook that reurns int right away

//custom hook (it will help us with the reducing number of imports in componets rest of the functinality in the component will stay the same  )

export const useGlobalContext = () => {
  return useContext(AppContext)
}
//here we are using ract hook useContext and it cannot be called in norma funtion|! thats why if we would remove our use from useGlobalContext it would throw error

export { AppContext, AppProvider }
