import ReactStars from 'react-stars'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useQuery, gql} from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
  posts {
    id
    title
    rating
  }
}
`;

type Post = {
    id: number
    title: string
    rating: number
}

function App() {
    const {loading, error, data} = useQuery<{ posts: Post[] }>(GET_POSTS);
    console.log({data})

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error : {error.message}</p>;

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div className="card">
                {data?.posts.map((post) => 
                    <h2>
                        <li style={{display: 'flex', alignItems: 'center', gap: 8}}>
                            <a href={'#'}>{post.title}</a> <ReactStars count={5} value={post.rating} color2={'#ffd700'} />
                        </li>
                    </h2>)}
            </div>
        </>
    )
}

export default App
