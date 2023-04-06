import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPost, updatePost } from '../../services/postService'

function Edit() {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const bodyRef = useRef()
    const subjectRef = useRef()

    useEffect(() => {
        getPost(params.id).then(data => setPost(data))
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        let updatedPost = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value
        }
        await updatePost(post._id, updatedPost)
        navigate(`/posts/${post._id}`)
    }

    return ( 
        <div className='bg-secondary opacity-75 edit'>
            <h3 className="mb-5 text-white">Edit Post/Log</h3>
            <br/>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <label className="text-warning">Subject:</label>
                    <input type="text" id="nme" ref={subjectRef} defaultValue={post.subject} class="ms-0 form-control" /><br /><br />

                    <label className="text-warning">Comment:</label>
                    <textarea class="form-control mt-4" ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={post.body} /><br /><br />

                    <button class="btn btn-outline-warning">Submit</button>
                </form>
                <Link to={`/posts/${post._id}`}>
                    <button className='btn btn-outline-warning'>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;