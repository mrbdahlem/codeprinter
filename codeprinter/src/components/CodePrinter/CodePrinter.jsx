import { useState } from 'react';
import { Toolbar } from './components/Toolbar.jsx';
import { Textarea } from '@/components/ui/textarea';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { cn } from '@/lib/utils';

import './lineNumbers.css';

export const CodePrinter = ({ fontList, fontSizes, themes }) => {
    const [font, setFont] = useState('Inconsolata');
    const [size, setSize] = useState(12);
    const [themeName, setThemeName] = useState(themes ? 'Grayscale' : 'None');
    const [showLineNumbers, setShowLineNumbers] = useState(true);
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('plaintext');
    const [preview, setPreview] = useState(false);

    const languages = SyntaxHighlighter.supportedLanguages.filter((x) => {
        return !x.startsWith('brain');
    });

    return (
        <>
            <div className="sticky top-0 z-50 grow-0 print:hidden">
                <Toolbar
                    fontList={fontList}
                    fontSizes={fontSizes}
                    themes={Object.keys(themes)}
                    languageList={languages}
                    defaultFont={font}
                    defaultSize={size}
                    defaultTheme={themeName}
                    defaultLanguage={language}
                    showLineNumbers={showLineNumbers}
                    onFontChange={setFont}
                    onSizeChange={setSize}
                    onThemeChange={setThemeName}
                    onShowLineNumbersChange={setShowLineNumbers}
                    onLanguageChange={setLanguage}
                    onPrint={window.print}
                    onPreviewChange={setPreview}
                ></Toolbar>
            </div>
            <div className="flex grow flex-col overflow-y-auto p-3">
                <Textarea
                    className={cn(
                        'grow resize-none print:hidden',
                        preview ? 'hidden' : '',
                    )}
                    style={{ fontFamily: font, fontSize: size + 'pt' }}
                    placeholder="Paste your code here!"
                    onChange={(e) => setCode(e.currentTarget.value)}
                ></Textarea>

                <div
                    className={preview ? 'flex' : 'screen:hidden'}
                    style={{
                        fontSize: '62.5%',
                    }}
                >
                    <SyntaxHighlighter
                        className="flex grow"
                        lineProps={
                            showLineNumbers
                                ? {
                                      className:
                                          'lineNumber whitespace-pre-wrap hyphens-none',
                                  }
                                : null
                        }
                        wrapLines="true"
                        style={themes[themeName] || ''}
                        codeTagProps={{
                            style: {
                                fontFamily: `"${font}", monospace`,
                                fontSize: `${size}pt`,
                            },
                        }}
                        lineNumberStyle={{
                            fontFamily: `"${font}", monospace`,
                            fontSize: `${size}pt`,
                        }}
                        language={language}
                        customStyle={{ border: 'none' }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
};

export default CodePrinter;
