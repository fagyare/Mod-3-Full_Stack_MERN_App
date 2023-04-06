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
        <div className="bg-secondary opacity-75 new-pst">
            <h3 className="mb-5 text-white">New Log</h3>
            <form onSubmit={handleSubmit} className="p-0 m-0">
                <label className="text-warning">Subject:</label>
                <input  class="form-control ms-0" type="text" id="nme" ref={subjectRef} /><br /><br />

                <label className="text-warning">Comment:</label><br />
                <textarea class="form-control" id="clr" cols="30" rows="10" ref={bodyRef} />

                <button class="btn btn-outline-warning">Submit</button>
            </form>
        </div>
     );
}

export default New;