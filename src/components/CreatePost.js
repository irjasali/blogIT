import { computeHeadingLevel } from '@testing-library/react';
import React, { useState } from 'react';
import '../forms.css';

const CreatePost = ({ onPress, onGuardar}) => {

    const defaultNP = {
        title: '',
        body: '',
        imageUrl: '',
        updatedAt: new Date(),
    }

    const [nP, sNP] = useState(defaultNP)

    const handleOnChange = event => {

        const name = event.target.name;
        const value = name === 'imageUrl'
            ? URL.createObjectURL(event.target.files[0])
            : event.target.value;
        sNP({ ...nP, [name]: value })
    }

    return (
        <div className='container'>
            <form id='create-post-form' className='post-form'>
                <div className='input-field'>
                    <label>Post title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="add a title"
                        value={nP.title}
                        onChange={handleOnChange}
                    />
                </div>
                <div className='input-field'>
                    <label>Post body</label>
                    <textarea
                        style={{ height: "200px" }}
                        type="text"
                        name="body"
                        placeholder="Add a body to the post"
                        value={nP.body}
                        onChange={handleOnChange}
                    />

                </div>
                <div className='input-field'>
                    <label>Add an image</label>
                    {
                        nP.imageUrl !== '' ?
                            <img
                                style={{
                                    maxHeight: "200px",
                                    maxWidth: "200px",
                                    alignSelf: "center",
                                    borderRadius: "8px",

                                }}
                                src={nP.imageUrl}
                                alt="img"
                            /> :
                            <input
                                type="file"
                                name='imageUrl'
                                onChange={handleOnChange}
                            />
                    }


                </div>

              <div className='buttons-container'> 
                <button
                    type='button'
                    onClick={() =>
                        onPress()
                    }>
                    Cancel
                </button>
                <button
                type='button'
                 disabled={nP.title==='' && nP.body === ''}
                 onClick={()=>onGuardar(nP)}>
                 Save Post   
                </button>
            </div>

            </form>
        </div>
    )
}

export default CreatePost;