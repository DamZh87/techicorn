import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };
  
  const buttonStyle = theme === 'light' 
  ? { backgroundColor: '#007bff', color: '#fff' } 
  : { backgroundColor: '#343a40', color: '#fff' };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary"  size="sm" style={buttonStyle}>
          {currentLang.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select Language">
      <DropdownItem key="kk" onClick={() => changeLanguage('kk')}>
          Қазақша
        </DropdownItem>
      <DropdownItem key="ru" onClick={() => changeLanguage('ru')}>
          Русский
        </DropdownItem>

        <DropdownItem key="en" onClick={() => changeLanguage('en')}>
          English
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}
