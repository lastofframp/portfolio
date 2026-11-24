import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

export function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setDark(saved);
    if (saved) document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  function changeTheme() {
    const enabled = !dark;
    setDark(enabled);
    if (enabled) {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-bs-theme');
      localStorage.removeItem('theme');
    }
  }

  return (
    <label className={'react-toggle custom-classname' + (dark ? ' react-toggle--checked' : '')}>
      <span className="react-toggle-track">
        <span className="react-toggle-track-check"><Moon size={10} color="white" /></span>
        <span className="react-toggle-track-x"><Sun size={10} color="#FDB813" /></span>
      </span>
      <span className="react-toggle-thumb" />
      <input type="checkbox" className="react-toggle-screenreader-only" aria-label="Dark mode toggle"
        checked={dark} onChange={changeTheme} />
    </label>
  );
}
