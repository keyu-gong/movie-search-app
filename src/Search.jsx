import React from 'react'

function Search() {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Perform the action you want when the Enter key is pressed
            console.log('Enter key pressed!');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Press Enter"
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Search;
