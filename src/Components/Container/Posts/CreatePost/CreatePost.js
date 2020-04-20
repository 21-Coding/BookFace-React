import React from 'react';

const CreatePost = () => {
    return (
        <div className="CreatePost">
            <form>
                <label for="post">What do you have to say today?</label>
                <input type="text" name="thisPost" id="post" value="...important stuff" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;
