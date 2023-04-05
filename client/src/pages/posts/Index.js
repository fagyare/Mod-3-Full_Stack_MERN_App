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
    <div >
                <h3 className="post">Youth INC Logs </h3>
                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    
                        <Link to="/posts/new">
                            <button class="btn btn-outline-warning btn-lg" >NEW POST</button>
                        </Link>
                    
    
                </div>
            </div>
}
</section>
    )
}

export default Index