import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/help-desk.png"

//components
import Button from "./Button"

export default function Navbar() {
  return (
    <nav>
        <Image src={Logo}
          width={60}
          quality={100}
          alt="Help Desk Logo"
          placeholder="blur"
        />
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Button 
          text="View Tickets"
          link="/tickets"
          linkClasses="ml-auto mr-8"
          classes="btn-primary rounded-md"
        />

    </nav>
  )
}
