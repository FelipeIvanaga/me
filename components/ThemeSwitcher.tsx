import { NextComponentType } from 'next';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { Moon, Sun } from 'phosphor-react';

const ThemeSwitcher: NextComponentType = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (currentTheme === 'dark') {
    return (
      <button type="button" onClick={() => setTheme('light')}>
        <Sun
          size={24}
          weight="light"
          className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-all"
        />
      </button>
    );
  }

  return (
    <button type="button" onClick={() => setTheme('dark')}>
      <Moon
        size={24}
        weight="light"
        className="hover:text-slate-900 cursor-pointer transition-all"
      />
    </button>
  );
};

export default ThemeSwitcher;
