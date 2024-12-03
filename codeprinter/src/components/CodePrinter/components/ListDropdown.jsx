import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

export const ListDropdown = ({
    defaultItem,
    options,
    caption,
    onChange,
    ...props
}) => {
    const [selected, setSelected] = useState(defaultItem);

    const handleChange = (selected) => {
        setSelected(selected);
        if (onChange) onChange(selected);
    };

    return (
        <DropdownMenu style={props.style} className={props.className}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="m-3">
                    <div>
                        {caption}: {selected}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {options.map((item, index) => (
                    <DropdownMenuItem
                        key={item}
                        onClick={() => handleChange(item)}
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ListDropdown;
