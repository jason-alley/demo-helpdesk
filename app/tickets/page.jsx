import React, { Suspense } from 'react'
import TicketsList from './TicketsList'

//components
import Loading from '../loading'

export default function page() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <TicketsList />
        </Suspense>
    </main>
  )
}
