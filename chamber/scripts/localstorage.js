// Local Storage

const lastVisit = localStorage.getItem("lastVisitDate");
if (!lastVisit) {
  document.querySelector("#visits").textContent = `This is your first visit!`;
  localStorage.setItem("lastVisitDate", new Date());
} else {
  console.log("lastVisit", lastVisit);
  const daysFromLastVisit = Math.round(
    (new Date().getTime() - new Date(lastVisit).getTime()) / 84600000
  );
  document.querySelector(
    "#visits"
  ).textContent = `It's been ${daysFromLastVisit} days since your last visit.`;
}
