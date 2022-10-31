// Caught Speeding CYU Asgn
let TicketEL = document.getElementById("");

document.getElementById("btn").addEventListener("click", Ticket);

function Ticket() {
  let DSF = +document.getElementById("DS").value;

  let SLF = +document.getElementById("SL").value;

  // Process

  let TicketSize = DSF - SLF;

  if (TicketSize <= 0) {
  }
}
