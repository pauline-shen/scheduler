export function getAppointmentsForDay(state, day) {
  const appts = [];
  const result = [];
  for (const d of state.days) {
    if (d.name === day) {
      appts.push(...d.appointments);
      break;
    }
  }
  for (let a of appts) {
    result.push(state.appointments[a.toString()]);
  }
  return result;
}


export function getInterviewersForDay(state, day) {
  const appts = [];
  const result = [];
  for (const d of state.days) {
    if (d.name === day) {
      appts.push(...d.appointments);
      break;
    }
  }
  for (let a of appts) {
    if (state.appointments[a.toString()].interview) {
      let i = state.interviewers[state.appointments[a.toString()].interview.interviewer];
      if (!result.includes(i)) result.push(i);
    }
  }
  return result;
}


export function getInterview(state, interview) {
  if (!interview) return null;
  const data = {};
  data["student"] = interview.student;
  data["interviewer"] = state.interviewers[interview.interviewer];
  return data;
}