import { useState } from 'react';
import { FontDropdown } from './FontDropdown.jsx';
import { ListDropdown } from './ListDropdown.jsx';
import { LanguageList } from './LanguageList.jsx';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export const Toolbar = ({
    fontList,
    defaultFont,
    fontSizes,
    defaultSize,
    themes,
    defaultTheme,
    languageList,
    defaultLanguage,
    showLineNumbers,
    onFontChange,
    onSizeChange,
    onThemeChange,
    onShowLineNumbersChange,
    onLanguageChange,
    onPrint,
}) => {
    const [themeName, setThemeName] = useState(defaultTheme);

    const handleThemeChange = (themeName) => {
        setThemeName(themeName);
        onThemeChange(themeName);
    };

    return (
        <nav className="flex max-h-max flex-row items-center bg-gray-500">
            <div className="flex flex-row items-center justify-start">
                <FontDropdown
                    fontList={fontList}
                    defaultFont={defaultFont}
                    onChange={onFontChange}
                ></FontDropdown>
                <ListDropdown
                    className="ml-0"
                    options={fontSizes}
                    defaultItem={defaultSize}
                    onChange={onSizeChange}
                    caption="Font Size"
                ></ListDropdown>
                <ListDropdown
                    options={themes}
                    defaultItem={defaultTheme}
                    onChange={handleThemeChange}
                    caption="Theme"
                ></ListDropdown>
                <label className="mx-3 block">
                    <Checkbox
                        checked={showLineNumbers}
                        onCheckedChange={onShowLineNumbersChange}
                    />
                    &nbsp;Line Numbers
                </label>
                <LanguageList
                    options={languageList}
                    defaultItem={defaultLanguage}
                    onChange={onLanguageChange}
                ></LanguageList>
            </div>
            <div className="ml-auto flex justify-end p-3">
                <Button variant="outline" onClick={onPrint}>
                    Print
                </Button>
            </div>
        </nav>
    );
};

export default Toolbar;
