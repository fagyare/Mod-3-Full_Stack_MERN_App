import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"

function Index({ user }) {
    const [posts, setPosts] = useState([])


    useEffect(() => {
      
        const loadData = async () => {
            const data = await getAllPosts(user?.department)
            setPosts(data)
        }
        
        setTimeout(loadData, 1500);
    }, [user?.department])
    console.log(posts)
    return (
            <section> { user && 
    <div>
                <h1>Index View</h1>
                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    
                        <Link to="/posts/new">
                            <button>NEW POST</button>
                        </Link>
                    
    
                </div>
            </div>
}
</section>
    )
}

export default Index