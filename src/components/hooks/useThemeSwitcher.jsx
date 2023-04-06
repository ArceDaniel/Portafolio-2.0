import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const prefersDarkQuery = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(prefersDarkQuery);
        const userPreference = localStorage.getItem('theme');
        const handleThemeChange = () => {
            if (userPreference) {
                let check = userPreference === 'dark' ? 'dark' : 'light';
                setMode(check);
                if(check === 'dark') {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }

            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if(check === 'light') {
                    document.body.classList.add('light');
                } else {
                    document.body.classList.remove('light');
                }
            }

        };

        mediaQuery.addEventListener('change', handleThemeChange);
        return () => mediaQuery.removeEventListener('change',handleThemeChange);
    }, []);
    
    useEffect(() => {
        if(mode === 'dark') {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        }else{
            localStorage.setItem('theme', 'light');
            document.body.classList.add('light');
        }
    }, [mode]);
        
    return [mode, setMode]
}

export default useThemeSwitcher