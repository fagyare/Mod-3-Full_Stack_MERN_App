import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            user: user.name,
            department: user.department
        }
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
            <h3>New Post</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Subject:</label><br />
                <input  class="form-control" type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr">Comment:</label><br />
                <textarea class="form-control" id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br />

                <button class="btn btn-secondary">Submit</button>
            </form>
        </div>
     );
}

export default New;