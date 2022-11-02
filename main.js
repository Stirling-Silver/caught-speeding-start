// Caught Speeding CYU Asgn
let TicketEL = document.getElementById("Ticket");

document.getElementById("btn").addEventListener("click", Ticket);

function Ticket() {
  let DSF = +document.getElementById("DS").value;

  let SLF = +document.getElementById("SL").value;

  // Process

  let TicketSize = DSF - SLF;

  if (TicketSize >= 20) {
    TicketEL = "Big Ticket";
  } else if (TicketSize >= 10 || TicketSize >= 19) {
    TicketEL = "Medium Ticket";
  } else if (TicketSize >= 1) {
    TicketEL = "Small Ticket";
  } else {
    TicketEL = "No Ticket";
  }
  let TD = TicketEL;
  document.getElementById("TD").innerHTML = `Ticket to issue: ${TD}`;
}
