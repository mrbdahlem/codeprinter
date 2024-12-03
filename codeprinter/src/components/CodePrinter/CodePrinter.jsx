import { useState } from 'react';
import { Toolbar } from './components/Toolbar.jsx';
import { Textarea } from '@/components/ui/textarea';

export const CodePrinter = ({ fontList, fontSizes, themes }) => {
    const [font, setFont] = useState('Inconsolata');
    const [size, setSize] = useState(12);
    const [theme, setTheme] = useState(
        themes ? Object.keys(themes)[0] : 'None',
    );
    const [showLineNumbers, setShowLineNumbers] = useState(true);

    return (
        <>
            <div className="grow-0">
                <Toolbar
                    fontList={fontList}
                    fontSizes={fontSizes}
                    themes={themes}
                    defaultFont={font}
                    defaultSize={size}
                    defaultTheme={theme}
                    showLineNumbers={showLineNumbers}
                    onFontChange={setFont}
                    onSizeChange={setSize}
                    onThemeChange={setTheme}
                    onShowLineNumbersChange={setShowLineNumbers}
                    onPrint={() => console.log('Print!')}
                ></Toolbar>
            </div>
            <div className="flex grow flex-col p-3">
                <Textarea
                    className="grow"
                    style={{ fontFamily: font, fontSize: size }}
                    placeholder="Paste your code here!"
                ></Textarea>
            </div>
        </>
    );
};

export default CodePrinter;
