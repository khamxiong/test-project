
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <header className='w-full min-h-[50px] bg-blue-600'>
         <nav className='flex items-center justify-center gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
         </nav>
    </header>
  )
}

export default Navbar