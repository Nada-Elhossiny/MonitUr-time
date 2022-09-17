function getToday() {
  return new Date().setHours(0, 0, 0, 0)
}

function getStartOfWeek() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); 
  return new Date(now.setDate(diff)).setHours(0, 0, 0, 0);
}

function getStartOfPreviousWeek() {
  const startOfWeek = new Date(getStartOfWeek())
  return startOfWeek.setDate(startOfWeek.getDate() - 7)
}

function getEndOfPreviousWeek() {
  const startOfWeek = new Date(getStartOfWeek())
  return startOfWeek.setDate(startOfWeek.getDate() - 1)
}