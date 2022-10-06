import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Navbar(props) {
    let styles = {
        backgroundColor: props.isDark ? '#21222A' : '#FFFFFF'
    }
    return (
        <div className='font-inter flex h-24 p-2 items-center justify-between' style={styles}>
            <div className='flex items-center gap-2'>
                <img src='/react.svg'></img>
                <h1 className='font-inter font-bold text-2xl text-cyan-500 tracking-tighter'>ReactFacts</h1>
            </div>
            <div className='self-'>
                <FormControlLabel sx={{ margin: '0' }} control={<Switch size='' onChange={props.toggleDark} checked={props.isDark} />} />
            </div>

        </div>
    )
}
