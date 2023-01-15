// export function getAppointmentsForDay(state, day) {
//   const appts = [];
//   const result = [];
//   for (const d of state.days) {
//     if (d.name === day) {
//       appts.push(...d.appointments);
//       break;
//     }
//   }
//   for (let a of appts) {
//     result.push(state.appointments[a.toString()]);
//   }
//   return result;
// }


// export function getInterviewersForDay(state, day) {
//   const appts = [];
//   const result = [];
//   for (const d of state.days) {
//     if (d.name === day) {
//       appts.push(...d.appointments);
//       break;
//     }
//   }
//   for (let a of appts) {
//     //console.log(a, "*")
//     if (state.appointments[a.toString()].interview) {
//       let i = state.interviewers[state.appointments[a.toString()].interview.interviewer];
//       console.log(i, "*")
//       if (!result.includes(i)) result.push(i);
//     }
//   }
//   return result;

// }


// export function getInterview(state, interview) {
//   if (!interview) return null;
//   const data = {};
//   data["student"] = interview.student;
//   data["interviewer"] = state.interviewers[interview.interviewer];
//   return data;
// }


export function getAppointmentsForDay(state, day) {
  const currentDay = state.days.find(d => day === d.name);

  if (state.days.length === 0 || currentDay === undefined) {
    return [];
  }
  return currentDay.appointments.map(id => state.appointments[id]);
}

export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find(d => day === d.name);

  if (state.days.length === 0 || currentDay === undefined) {
    return [];
  }
  if (currentDay.interviewers) {
    console.log(currentDay.interviewers.map(id => state.interviewers[id]))
    return currentDay.interviewers.map(id => state.interviewers[id]);
  }
}

export function getInterview(state, interview) {
  return (
    interview && {
      ...interview,
      interviewer: state.interviewers[interview.interviewer]
    }
  );
}