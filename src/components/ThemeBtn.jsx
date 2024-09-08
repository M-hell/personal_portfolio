import React from 'react'
import useTheme from '../contexts/theme';
import Switch from '@mui/material/Switch';

export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus==true) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <Switch checked={themeMode=="dark"} onChange={onChangeBtn}/>
            
    );
}

