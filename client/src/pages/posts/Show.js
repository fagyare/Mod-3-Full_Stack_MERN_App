import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deletePost, getPost } from "../../services/postService"

function Show({ user }) {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getPost(params.id)
            if (!data) navigate('/posts')
            setPost(data)
        }
        loadData()
    }, [params.id])

    async function handleDeleteComment(comment) {
        await deleteCommentFromPost(comment._id, post._id)
        let updatedPost = { ...post }
        updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
        setPost(updatedPost)
    }

    async function handleDeletePost() {
        await deletePost(post._id)
        navigate('/posts')
    }

    async function handleSubmit(e) {
        e.preventDefault()
console.log(user)
        let comment = {
            body: bodyRef.current.value,
            user
        }

        const newComment = await createCommentForPost(comment, post._id)
        let updatedPost = { ...post }
        updatedPost.comments.push(newComment)
        setPost(updatedPost)
        bodyRef.current.value = ''
        detailsRef.current.open = false
    }

    return (
            <div>
                <div className="bg-secondary opacity-75 a-post">
                    <h2 className="text-white">{post.subject}</h2>
                    <h5 style={{ opacity: '.7'}}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <div className="text-white p-body">{post.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <div className="text-warning">Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="text-white comm">
                                    <div>{comment.user}</div>
                                    <div className="text-white"><em>  {comment.body}</em></div>
                                    {comment.user === user &&
                                        <>
                                            <button className="text-danger" onClick={() => handleDeleteComment(comment)}>x</button>
                                            <Link to={`/posts/${post._id}/comments/${comment._id}`}><span className="text-success" >+</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    {user && 
                        <details ref={detailsRef}>
                            <summary className="text-warning" style={{ opacity: '.5' }}>Post a comment:</summary>
                            <form onSubmit={handleSubmit}>
                                <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                            <button class="btn btn-outline-warning">Comment</button>
                            
                            
                            </form>
                        </details>
                    }
                    
                    <div className="buttons">
                        {post.user === user &&
                            <>
                         <Link to='/posts'>
                            <button className="btn btn-outline-warning">Back</button>
                       
                        <Link to={`/posts/${post._id}/edit`}>
                           <button class="btn btn-outline-warning">Edit</button>

                            </Link>

                            <button className="btn btn-outline-warning"  onClick={handleDeletePost}>Delete</button>
                       
                        </Link>
                            </>
                        }
                       
                    </div>
                </div>
            </div>
    )
}

export default Show