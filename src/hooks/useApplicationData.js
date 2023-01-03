import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const setDay = day => setState({ ...state, day });
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => (
        { ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, [])


  function updateSpots(change) {
    const selectedDay = state.days.find(d => d.name === state.day);
    const updateDays = [...state.days]
    updateDays.forEach((d) => {
      if (d.id === selectedDay.id) {
        d.spots += change;
      }
    })
    return updateDays;
  }


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = updateSpots(-1)
        return setState({
          ...state,
          appointments,
          days
        })
      })
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = updateSpots(1)
        setState({
          ...state,
          appointments,
          days
        })
      })
  }

  return { state, setDay, bookInterview, cancelInterview };
}