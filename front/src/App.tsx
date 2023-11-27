import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useQuery, gql} from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
  posts {
    id
    title
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
    // const data = [{title: "post 1"}]

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
                {data?.posts.map((post) => <h2><li><a href={'#'}>{post.title}</a></li></h2>)}
            </div>
        </>
    )
}

export default App
