'use client';

import { useEffect } from 'react';
import styles from './TodayWeatherBox.module.css';
import axios from 'axios';

export default function TodayWeatherBox() {

    

    return(
        <div className={styles.body}>
            <div className={styles.title}>
                + 오늘의 날씨 +
            </div>
            
        </div>
    )
}