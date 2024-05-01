import Link from 'next/link';
const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white">
             </div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <a className="text-white hover:text-gray-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white hover:text-gray-300">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;