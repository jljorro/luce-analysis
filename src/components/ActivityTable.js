import React from "react";
import { useState, useEffect } from "react";

import { Activity } from "../Activity";

import { Table, Spinner } from "react-bootstrap";

export default function ActivityTable() {

    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("useEffect")
        setLoading(true)

        fetch("./data/activities.json")
        .then(response => response.json())
        .then(json => {
            setActivities(json)
            console.log(json)
            setLoading(false)
        })
      }, [])

    const spinnerLoading = () => {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando Actividades...</span>
            </Spinner>
        )
    }

    const activitiesTable = () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Facultad</th>
                        <th>Comienzo</th>
                        <th>Categoría</th>
                        <th>Participación</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
            {activities
                .map(activity => (
                    <Activity
                        key = {activity.CD_ACTIVITY}  
                        activity = {activity} />
            ))}
                
            </tbody>
        </Table>
    )}

    return (
        <>
        {loading 
            ? spinnerLoading()
            : activitiesTable()}
        </>        
    )

}