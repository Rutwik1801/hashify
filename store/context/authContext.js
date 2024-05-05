import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userName: "",
  email: "",
  onSignUp: () => {},
  onLogin: () => {},
  onLogout: () => {}
})

const AuthContextProvider = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(false)

  const onSignUp = () => {
    setIsLoggedIn(true)
    setUserInfo({
      isLoggedIn: isLoggedIn,
      userName:"ruts1801",
      email: "ruts1801.g.com"
    })
  }
  const onLogin = () => {
    setIsLoggedIn(true)
    setUserInfo({
      isLoggedIn: isLoggedIn,
      userName:"ruts1801",
      email: "ruts1801.g.com"
    })
  }
  const onLogout = () => {
    setIsLoggedIn(false)
    setUserInfo(null)
  }

  const value= {
    isLoggedIn: isLoggedIn,
    userName:"ruts1801",
    email: "ruts1801.g.com",
    onSignUp: onSignUp,
    onLogin: onLogin,
    onLogout: onLogout
  }

 return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

export default AuthContextProvider