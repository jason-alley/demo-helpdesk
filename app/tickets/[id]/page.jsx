import { notFound } from 'next/navigation'
import { Suspense } from 'react';

// Components
import Loading from '../../loading';

export const dynamicParams = true;

/** 
 * Get a list of all the tickets to generate static pages for.
*/
export async function generateStaticParams() {
    const response = await fetch('http://localhost:4000/tickets'
    );
    const tickets = await response.json();
    return tickets.map(ticket => ({
     id: ticket.id,
    }));
  }

/** 
 * Gets the data for a single ticket.
*/
async function getTicket(id) {
    const response = await fetch('http://localhost:4000/tickets/' + id, {
      next: {
          revalidate: 60,
      }
    });

    if (!response.ok) {
        notFound();
    }
    return response.json();
  }

export default async function TicketDetails({ params}) {
    const ticket = await getTicket(params.id);
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <Suspense fallback={<Loading />}>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Creaded by: {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </Suspense>
    </main>
  )
}
