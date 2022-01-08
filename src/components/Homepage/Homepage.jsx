/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Homepage.module.css'
import {fetchWord} from '../../store/actionCreators.js'
import Circular from '../Circular/Circular'
import ResultPage from '../ResultPage/ResultPage'

export default () => {
    const {word, loading, error} = useSelector(state => state)
    const dispatch = useDispatch()
    
    const findWord = (event) => {
        event.preventDefault();
        let targetWord = event.target[1].value;
        let targetLang = event.target[0].value;
        dispatch(fetchWord(targetWord, targetLang));
        setTimeout(() => {
            event.target[1].value = " "
        }, 600)
    }

    return (
        <div className={styles.mainBlock}>
            <form onSubmit={(event) => findWord(event)} className={styles.searchForm}>
                <div className={styles.languages}>
                    <p> Language: </p>
                    <select className={styles.selectLanguage}>
                        <option selected>EN</option>
                        <option>FR</option>
                        <option>ES</option>
                        <option>RU</option>
                    </select>
                </div>
                <input type="text" className={styles.searchInput} placeholder="Enter the word to search for" required/> 
            </form>

            {loading ?  <Circular /> : false}
            {error ?  <h1 className={styles.error}> {error} </h1> : false}

            <ResultPage />
        </div>
    )
}
