import { useState } from 'react';
import './App.css';
import CountButton from './components/countButton';

function App() {
    const [count, setCount] = useState(0);

    const handleChange = (val: number) => {
        console.log('changed!');
        setCount(val);
    };

    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }

    return (
        <>
            <div className=" h-screen w-screen flex flex-col space-y-4 items-center justify-center dark:bg-gray-900 dark:text-white">
                <CountButton onChange={handleChange} />
                <div>Someone has clicked {count} times.</div>
            </div>
        </>
    );
}

export default App;
