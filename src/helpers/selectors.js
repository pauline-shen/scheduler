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


export function getInterview(state, interview) {
  if (!interview) return null;
  const data = {};
  data["student"] = interview.student;
  data["interviewer"] = state.interviewers[interview.interviewer];
  return data;
}