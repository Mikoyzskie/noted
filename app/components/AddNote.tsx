import React from 'react'

export default function AddNote() {
    return (
        <div className='new-note absolute bg-black/[0.1] inset-0 backdrop-blur-sm flex items-center justify-center'>
            <form action="" className='new-note__form bg-white'>
                <h2>Create A Note</h2>
                <label htmlFor="new-note__title">Note Title</label>
                <input id='new-note__title' type="text" placeholder='Title' className='p-3' />

            </form>
        </div>
    )
}
