import { useState } from 'react'
import { Eng } from './components/Eng'
import { French } from './components/French'
import { German } from './components/German'
import { Rus } from './components/Rus'

enum Language {
  ENGLISH = 'english',
  FRENCH = 'french',
  GERMAN = 'german',
  RUSSIAN = 'russian'
}

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(Language.ENGLISH);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
  };

  console.log(selectedLanguage);
  

  const textComponents = {
    "english": <Eng />,
    "french": <French />,
    "german": <German />,
    "russian": <Rus />,
  }

  const prefixTexts = {
    "english": "Written in 2020. Author: Myrzakhmet Arman. Public figure, sports veteran",
    "french": "Écrit en 2020. Auteur : Myrzakhmet Arman. Personnalité publique, vétéran du sport",
    "german": "Geschrieben im Jahr 2020. Autor: Myrzakhmet Arman. Persönlichkeit des öffentlichen Lebens, Sportveteran",
    "russian": "Написано в 2020 году. Автор: Мырзахмет Арман. Общественный деятель, ветеран спорта"
  }

  const footerTexts = {
    "english": "All rights reserved. Abridged version of Sacred Marriage",
    "french": "Tous droits réservés. Version abrégée du Mariage sacré",
    "german": "Alle Rechte vorbehalten. Gekürzte Version von Sacred Marriage",
    "russian": "Все права защищены. Сокращенная версия книги 'Священный брак'."
  }

  return (
    <div className='flex items-center justify-center flex-col text-[#DBDBDB] p-4 sm:py-0 sm:px-3'>
      <header className='flex w-full justify-between items-center'>
        <p className='text-2xl p-2 sm:text-lg'>SACRED MARRIAGE</p>
        <select aria-label="Select Language" className="sm:w-24 sm:text-xs bg-gray-50 w-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value as Language)}>
          <option value={Language.ENGLISH}>English</option>
          <option value={Language.GERMAN}>Deutsch</option>
          <option value={Language.FRENCH}>Français</option>
          <option value={Language.RUSSIAN}>Русский</option>
        </select>
      </header>
      <main className='max-w-[720px] text-start md:mt-16 md:p-10 rounded-xl sm:p-3 sm:mt-28' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <h1 className='mb-10 text-sm italic'>{prefixTexts[selectedLanguage]}</h1>
        {textComponents[selectedLanguage]}
      </main>
      <p className='my-16'>{footerTexts[selectedLanguage]}</p>
    </div>
  )
}

export default App;
