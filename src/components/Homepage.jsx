/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Homepage.module.css'
import {fetchWord} from '../store/actionCreators.js'
import Circular from './Circular'

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
    
    console.log(word)

    return (
        <div>
            <form onSubmit={(event) => findWord(event)}>
            <p> Language: </p>
            <select>
                <option selected>EN</option>
                <option>FR</option>
                <option>ES</option>
                <option>RU</option>
            </select>
                <input type="text" placeholder="Enter the word to search for" required/> 
            </form>

            <div> {loading ?  <Circular /> : false} </div>
            <div> {error ?  <h1> {error} </h1> : false} </div>

            <div> {word.map(el => (
                <>
                    <h1 className={styles.word}> {el.word} </h1>
                    <h2> {el.phonetic} </h2>
                    <h2> Definition: {el.meanings[0].definitions[0].definition} </h2>
                    <h2> Synonyms: {el.meanings[0].definitions[0].synonyms.map(x => x)} </h2>
                </>
            ))} </div>
        </div>
    )
}

