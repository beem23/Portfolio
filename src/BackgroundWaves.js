import React from 'react';
import Wave from 'react-wavify';
import './styles/BackgroundWavesStyles.css';

function BackgroundWaves(props) {
    const { isDarkMode } = props;
    const WaveColorSwitch = `Wave ${isDarkMode ? 'SwitchColorDark' : 'SwitchColorLight'}`;
    const fillColor = isDarkMode ? '#362100' : '#f79902'
    return (
        <div className='waveContainer'>
            <Wave className={WaveColorSwitch} fill={fillColor}
                paused={false}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.04,
                    points: 3
                }}
            />
            <Wave className="Wave2" fill={fillColor}
                paused={false}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.03,
                    points: 3
                }}
            />
            <Wave className="Wave3" fill={fillColor}
                paused={false}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.02,
                    points: 3
                }}
            />
            <Wave className="Wave4" fill={fillColor}
                paused={false}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.03,
                    points: 3
                }}
            />
            <Wave className="Wave5" fill={fillColor}
                paused={false}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.04,
                    points: 3
                }}
            />
        </div>
    )
}
export default BackgroundWaves;