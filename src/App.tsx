import { useState } from 'react'
import { Eng } from './components/Eng'
import { French } from './components/French'
import { German } from './components/German'

enum Language {
  ENGLISH = 'english',
  FRENCH = 'french',
  GERMAN = 'german'
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
    "german": <German />
  }

  const footerTexts = {
    "english": "All rights reserved. Abridged version of Sacred Marriage",
    "french": "Tous droits réservés. Version abrégée du Mariage sacré",
    "german": "Alle Rechte vorbehalten. Gekürzte Version von Sacred Marriage"
  }

  return (
    <div className='flex items-center justify-center flex-col text-[#DBDBDB]'>
      <header className='flex items-start w-full justify-between'>
        <p className='text-2xl p-2'>SACRED MARRIAGE</p>
        <select className="bg-gray-50 w-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value as Language)}>
          <option value={Language.ENGLISH}>English</option>
          <option value={Language.GERMAN}>Deutsch</option>
          <option value={Language.FRENCH}>Français</option>
        </select>
      </header>
      <div className='max-w-[800px] text-start mt-20 p-20 rounded-xl' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <h1 className='mb-10 text-sm italic'>Written in 2020. Author: Myrzakhmet Arman. Public figure, sports veteran</h1>
        {textComponents[selectedLanguage]}
      </div>
      <p className='my-16'>{footerTexts[selectedLanguage]}</p>
    </div>
  )
}

export default App;
