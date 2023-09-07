import React, { Suspense } from 'react'
import TicketsList from './TicketsList'

//components
import Loading from '../loading'
import Button from '../components/Button'

export default function page() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
          <Button 
            text="New Ticket"
            link="/tickets/create"
            linkClasses="ml-auto"
            classes="rounded-md bg-gray-500 text-white"
          />
        </nav>
        <Suspense fallback={<Loading />}>
          <TicketsList />
        </Suspense>
    </main>
  )
}
