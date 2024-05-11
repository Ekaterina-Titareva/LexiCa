import { useState } from 'react';

function TestForm() {
    const [inputText, setInputText] = useState('');
    const [editedText, setEditedText] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        setEditedText(inputText.toUpperCase());
        setInputText('');
    }

    return (
        <div>
            <form onSubmit={addItem}>
                <input type='text' 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder='to upper case' 
                    style={{background:"transparent"}}/>
                <p>The text will be here: {editedText}</p>
                <button type='submit'>
                    Send
                </button>
            </form>
        </div>
    );
}

export default TestForm;



