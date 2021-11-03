import { useState, useEffect } from "react"

const LeadsPanel = () => {
    const [leads, setLeads] = useState([])

    useEffect(() => {
        setLeads(JSON.parse(localStorage.getItem("leads")))
    }, [])
    return <div>
        <h1>Painel de Leads</h1>
        <a href="/leads/new">Novo Lead (+)</a>
        <table>
            <tr>
                <th>Cliente em Potencial</th>
                <th>Dados Confirmados</th>
                <th>Reunião Agendada</th>
            </tr>
            {
                leads.map((lead) => {
                    return <tr>
                        <td>{lead.status==="Cliente em Potencial" && lead.name}</td>
                        <td>{lead.status==="Dados Confirmados" && lead.name}</td>
                        <td>{lead.status==="Reunião Agendada" && lead.name}</td>
                    </tr>
                })
            }
        </table>
    </div>
}
export default LeadsPanel