import * as React from 'react'
import Iframe from 'react-iframe'
import './layout.css'
import { youtube } from './style/utility.module.css'

export const Video = () => {
    return (
        <div className={youtube}>
            <Iframe
                id='ytplayer'
                type='text/html'
                width='720'
                height='405'
                src='https://www.youtube.com/embed/XdlmoLAbbiQ?autoplay=1&mute=1&controls=0&loop=1&playlist=XdlmoLAbbiQ'
                frameborder='0'
                allowfullscreen
            />
        </div>
    )
}
