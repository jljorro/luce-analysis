import './App.css';

import { useState, useEffect } from 'react';
import { Activity } from './Activity';
import {
  create as createActivity, 
  getAll as getAllActivities } from './services/activitiesSrv'


export default function App() {
  const [activities, setActivities] = useState([])
  const [newActivity, setNewActivity] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("useEffect")
    setLoading(true)

    getAllActivities()
    .then(activities => {
      setActivities(activities)
      setLoading(false)
    })
  }, [])

  const handleChange = (event) => {
    setNewActivity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const activityAddToState = {
      "userId": 1,
      "title": newActivity,
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    createActivity(activityAddToState)
    .then(newActivity => {
      setActivities(prevNotes => prevNotes.concat(newActivity))
    })

    setNewActivity("")
  }

  return (
    <div>
      <h1>Actividades</h1>
      <p>{
        loading
          ? "Cargando..."
          : ""
      }</p>
      <ol>
        {activities
          .map(activity => (
            <Activity key={activity.id} {...activity} />
          ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newActivity}/>
        <button>Crear actividad</button>
      </form>

    </div>
  );
}