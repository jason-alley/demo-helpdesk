import Link from 'next/link'

// Button components with props for the button text and the link and color.
export default function Button({ text, link, classes, linkClasses }) {
    return (
        <Link href={link} className={`${linkClasses}`} >
            <button className={`${classes}`}>{text}</button>
        </Link>
    )
}