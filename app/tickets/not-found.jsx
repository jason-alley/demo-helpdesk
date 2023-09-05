import Link from 'next/link';

export default function Notfound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem.</h2>
        <p>We could not find the Ticket you were looking for.</p>
        <p>Go back see all <Link href="/tickets">tickets</Link>.
        </p>
    </main>
  )
}
