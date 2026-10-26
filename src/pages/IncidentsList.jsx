import { useLocation } from "react-router-dom"
import { mockIncidents } from "../data/incidents"
import { ListAccordian } from "../components/ListAccordian"
import { useEffect } from "react"
import { useContext } from "react"
import { TitleContext } from "../App"
export function IncidentsList()
{
    const {setTitle,title}=useContext(TitleContext)
        useEffect(function()
    {
    setTitle("IncidentList")
    },[])
    const formValues=useLocation().state
    console.log(formValues)
    return(
    <div className="alert alert-dark mx-auto w-75">

    <h1 className="text-center">List</h1>
    <hr/>
    <ListAccordian mockIncidents={mockIncidents}/>
    </div>)
}