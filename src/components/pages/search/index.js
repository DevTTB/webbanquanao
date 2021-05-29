import React from 'react';

function SearchPage(props) {
    return (
        <div>
            <form>
                <input type='text' name='q'/>
                <input type='submit' value='send'/>
            </form>
        </div>
    );
}

export default SearchPage;