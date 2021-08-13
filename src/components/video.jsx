import * as React from 'react'
import Iframe from 'react-iframe'
import { youtube } from './style/utility.module.css'

export const Video = () => {
    const url = `https://www.youtube.com/embed/MLCSfwHLCwA?autoplay=1&mute=1&controls=0&loop=1&start=12&playlist=MLCSfwHLCwA`
    return (
        <div className={youtube}>
            <Iframe
                id='ytplayer'
                type='text/html'
                width='720'
                height='480'
                src={url}
                frameborder='0'
                allowfullscreen
            />
        </div>
    )
}
