import { useEffect, useState } from 'react';

interface CountButtonProps {
    onChange?: (count: number) => void;
}

export function CountButton({ onChange }: CountButtonProps): JSX.Element {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (onChange) {
            onChange(count);
        }
    }, [count]);

    const handleClick = () => {
        setCount((c) => c + 1);
    };

    return (
        <button
            onClick={handleClick}
            className="text-3xl bg-blue-600 hover:bg-blue-400 hover:text-black p-4 rounded-md text-white"
        >
            count is {count}
        </button>
    );
}

export default CountButton;
