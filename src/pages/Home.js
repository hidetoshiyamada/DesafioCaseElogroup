import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
    const history = useHistory()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        const userPassword = localStorage.getItem(user)
        if (userPassword === password){
            history.push("/leads")
        }else{
            alert("Usuário ou senha incorretos")
        }
    }
    
    return <div>
        <h1>LOGIN</h1>
        <label> Usuário </label>
        <input value={user} onChange={(event) => {
            setUser(event.target.value)

        }} />
        <label> Senha </label>
        <input type = "password" value={password} onChange={(event) => {
            setPassword(event.target.value)

        }} />
        <button onClick={handleSubmit}> Login </button>
    </div>
}
export default Home