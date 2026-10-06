'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h1>Server Function</h1>

            <button
                onClick={async () => {
                    setMessage(await greet('Студент'));
                }}
            >
                Поздороваться
            </button>

            <p>{message}</p>
        </div>
    );
}