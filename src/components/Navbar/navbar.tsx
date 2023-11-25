import Link from "next/link"


export default function Navbar()
{
    return (

        <nav>
      <Link href="/" className="logo">
        Xplore
        <i className="fab fa-staylinked" />
        kill
      </Link>
      <div className="nav-links" id="navLinks">
        {/* Reposnive bar open and close */}
        <i className="fa fa-times" />
        <ul>
          <li>
            {/* <a href="index.html">Home</a> */}
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <a href="course.html">Course</a> */}
            <Link href="course">Course</Link>
          </li>
          <li>
            {/* <a href="blog.html">Blog</a> */}
            <Link href="blog">Blog</Link>
          </li>
          <li>
            {/* <a href="about.html">About</a> */}
            <Link href="about">About</Link>
          </li>
          <li>
            {/* <a href="contact.html">Contact</a> */}
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars"  />
      {/* Reposnive bar open and close */}
    </nav>



    )
}
