import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: {
      en: 'Welcome to our React App!',
      ru: 'Добро пожаловать в наше React-приложение!',
    },
    about: {
      en: 'This is the About section.',
      ru: 'Это раздел О нас.',
    },
    services: {
      en: 'Our Services include...',
      ru: 'Наши услуги включают...',
    },
    contact: {
      en: 'Contact us at: contact@example.com',
      ru: 'Свяжитесь с нами: contact@example.com',
    }
  };

  const isDark = theme === 'dark';

  const containerStyle = {
    backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
    color: isDark ? '#f5f5f5' : '#1a1a1a',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: isDark ? '#333' : '#eee',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 10,
  };

  const buttonStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    border: isDark ? '1px solid white' : '1px solid black',
    backgroundColor: isActive ? (isDark ? '#555' : '#ddd') : 'transparent',
    color: isDark ? '#fff' : '#000',
    cursor: 'pointer'
  });

  const contentStyle = {
    paddingTop: '6rem',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <button onClick={() => setActiveSection('home')} style={buttonStyle(false)}>🌐 Logo</button>
        <div>
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={buttonStyle(false)}>
            {isDark ? '🌞 Light' : '🌙 Dark'}
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')} style={buttonStyle(false)}>
            {lang === 'en' ? '🇷🇺 RU' : '🇬🇧 EN'}
          </button>
        </div>
      </header>

      <main style={contentStyle}>
        <div>
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={buttonStyle(activeSection === key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
          {sections[activeSection][lang]}
        </div>
      </main>
    </div>
  );
}
