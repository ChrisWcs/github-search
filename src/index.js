import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <input value={ text } onChange={(event) => setText(event.target.value)} />
            <h1>Hello { text }</h1>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
