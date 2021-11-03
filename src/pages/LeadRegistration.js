import { useState, useEffect } from "react"
import "./LeadRegistration.css"

const Home = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [rpa, setRpa] = useState(false)
    const [digitalProduct, setDigitalProduct] = useState(false)
    const [analytics, setAnalytics] = useState(false)
    const [bpm, setBpm] = useState(false)
    const handleSubmit = () => {
        const leads = JSON.parse(localStorage.getItem("leads")) 
        if (name.length > 0 && phone.length > 0 && email.length > 0) {
            if (leads && leads.length > 0) {
                leads.push({
                    name,
                    phone,
                    email,
                    rpa,
                    digitalProduct,
                    analytics,
                    bpm,
                    status: "Cliente em Potencial"
                })
                localStorage.setItem("leads", JSON.stringify(leads))
                alert("Lead criado com sucesso")
            } else {
                localStorage.setItem("leads", JSON.stringify([{
                    name,
                    phone,
                    email,
                    rpa,
                    digitalProduct,
                    analytics,
                    bpm,
                    status: "Cliente em Potencial"
                }]))
                alert("Lead criado com sucesso")
            }
        }

    }

    return <div>
        <h1>LEADS</h1>
        <label> Nome </label>
        <input value={name} onChange={(event) => {
            setName(event.target.value)

        }} />
        <label> Telefone </label>
        <input value={phone} onChange={(event) => {
            setPhone(event.target.value)

        }} />
        <label> E-mail </label>
        <input type="email" value={email} onChange={(event) => {
            setEmail(event.target.value)

        }} />
        <table>
            <tr>
                <th><input checked={rpa && digitalProduct && analytics && bpm} onClick={() => {
                    if (rpa && digitalProduct && analytics && bpm) {
                        setRpa(false)
                        setDigitalProduct(false)
                        setAnalytics(false)
                        setBpm(false)
                    } else {
                        setRpa(true)
                        setDigitalProduct(true)
                        setAnalytics(true)
                        setBpm(true)
                    }

                }} type="checkbox" /></th>

            </tr>
            <tr>
                <td><input checked={rpa} onClick={() => setRpa(!rpa)} type="checkbox" /></td>
                <td>RPA</td>
            </tr>
            <tr>
                <td><input checked={digitalProduct} onClick={() => setDigitalProduct(!digitalProduct)} type="checkbox" /></td>
                <td>Produto Digital</td>
            </tr>
            <tr>
                <td><input checked={analytics} onClick={() => setAnalytics(!analytics)} type="checkbox" /></td>
                <td>Analytics</td>
            </tr>
            <tr>
                <td><input checked={bpm} onClick={() => setBpm(!bpm)} type="checkbox" /></td>
                <td>BPM</td>
            </tr>
        </table>
        <button onClick={handleSubmit}> Salvar </button>
        <a href = "/leads">Ver Leads</a>
    </div>
}
export default Home