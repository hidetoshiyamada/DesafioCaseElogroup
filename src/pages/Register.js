import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

const Register = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [confirmationError, setConfirmationError] = useState(false)
    const [matchError, setMatchError] = useState(false)
    const [emptyFieldError, setEmptyFieldError] = useState(false)

    const history = useHistory()
    
    useEffect(() => {
        if (password === passwordConfirmation) {
            setConfirmationError(false)
        } else {
            setConfirmationError(true)
        }
    }, [password, passwordConfirmation])

    useEffect(() => {
        if (password.length > 0 && user.length > 0) {
            setEmptyFieldError(false)
        } else {
            setEmptyFieldError(true)
        }
    }, [password, user])

    useEffect(() => {
        const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/)
        const match = regex.test(password)
        if (match) {
            setMatchError(false)
        } else {
            setMatchError(true)
        }
    }, [password, passwordConfirmation])

    const handleSubmit = () => {
        if(!matchError && !emptyFieldError && !confirmationError){

            localStorage.setItem(user, password)
            history.push("/leads")
        }
    }

    return <div>
        <h1>LOGO (cadastro)</h1>
        <label> Usuário </label>
        <input value={user} onChange={(event) => {
            setUser(event.target.value)

        }} />
        <label> Senha </label>
        <input type="password" value={password} onChange={(event) => {
            setPassword(event.target.value)

        }} />
        <label> Confirmar Senha </label>
        <input type="password" value={passwordConfirmation} onChange={(event) => {
            setPasswordConfirmation(event.target.value)

        }} />
        <br/>
        {emptyFieldError && <><span>Todos os campos são obrigatórios</span><br/></>}
        {matchError && <><span>A senha deve possuir pelo menos 8 caracteres, contendo pelo menos um caracter especial, um numérico e um alfanumérico</span><br/></>}
        {confirmationError && <><span>As senhas não coincidem</span><br/></>}
        <button onClick={handleSubmit} disabled = {matchError || confirmationError || emptyFieldError}> Registrar </button>
    </div>
}
export default Register