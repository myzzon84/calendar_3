import './addNoteForm.scss';

const AddNoteForm = ({ closeForm, year, month, dayNumber, textNote, noteText, addNote, getZero, showNoteForm }) => {
    return (
        <div className={showNoteForm}>
            <h2 className="titleForm">
                Додати замітку
            </h2>
            <h2 className="selectedDate">
                {`${getZero(dayNumber)}-${getZero(month)}-${year}`}
            </h2>
            <div className="controls">
                <textarea className='textarea' onChange={textNote} value={noteText}>

                </textarea>
                <div className="buttons">
                    <button className='addNoteButton btn' onClick={addNote}>
                        Додати
                    </button>
                    <button className='closeFormButton btn' onClick={closeForm}>
                        Відміна
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AddNoteForm;