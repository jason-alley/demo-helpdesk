import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/help-desk.png"

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
    </nav>
  )
}
