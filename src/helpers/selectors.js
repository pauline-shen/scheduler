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