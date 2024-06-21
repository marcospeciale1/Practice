const log = document.createElement("button");
log.textContent = "log in";
document.body.appendChild(log);
const logout = document.createElement("button");
logout.textContent = "log out";

document.addEventListener("DOMContentLoaded", () => {
  const status = localStorage.getItem("login");

  log.addEventListener("click", () => {
    log.remove();
    document.body.appendChild(logout);
    localStorage.setItem("login", "true");
    const status = localStorage.getItem("login");
  });

  logout.addEventListener("click", () => {
    if (window.localStorage.getItem("login") === "true") {
      logout.remove();
      document.body.appendChild(log);
      localStorage.setItem("login", "false");
    }
    const status = localStorage.getItem("login");
  });
  if (status === "true") {
    document.body.appendChild(logout);
    log.remove();
  }
});
