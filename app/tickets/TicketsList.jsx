async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets');
  return response.json();
}

export default async function TicketsList() {
    const tickets = await getTickets();
  return (
    <>
        {
            tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </div>
            ))
        }
        {tickets.length === 0 && (
            <div className="text-center">
                <p>There are no open tickets, yay!👏</p>
            </div>
        )}
    </>
  )
}
