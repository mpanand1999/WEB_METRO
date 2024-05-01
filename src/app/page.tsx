// pages/index.js
import Post from '../components/Post';
import Image from "next/image";
import {SearchIcon } from'@heroicons/react/solid'
import Link from 'next/link';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h2>MERTO WEB</h2>

    
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
    <div className=''>
     <input className='' type="text" placeholder='your search' />
      </SearchIcon>
        </div>

const HomePage = ({ posts }) => (
  <div>
    <h1>Blog Homepage</h1>
    <div className="posts-container">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  </div>
);

export default HomePage;

export async function getStaticProps() {
  // Fetch blog posts from the API
  const res = await fetch('https://raw.githubusercontent.com/DarkPhoenix2704/json-host/main/news.json');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
</main>
  );
}
export default Navbar;
