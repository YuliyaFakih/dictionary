/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import styles from './ResultPage.module.css'

export default () => {
    const {word, loading, error} = useSelector(state => state)
    console.log(word)
    return (
        <div> {word.map(el => (
            <div className={styles.wordInfo}>
                <NavLink to="/word-to-search" className={styles.wordLink}> <b>{el.word}</b> <br/> <h6>(Tap here to see its meanings)</h6> </NavLink>
                    
                {el.phonetics.map(w => (
                    <div className={styles.phonetics}>
                        {w.text ? <h2> <i>Phonetic:</i>  [{w.text}] </h2> : null}
                        {w.audio ? <figure> <figcaption><i>Pronunciation:</i></figcaption> <audio controls src={w.audio}> </audio> </figure> : null}
                    </div>
                ))}
                    
                {el.origin ? <h2><i>Origin:</i> {el.origin}</h2> : null}
                {el.meanings.map(w => (
                    <div className={styles.wordDefinitions}>
                        <h2> <i>Part of speech:</i> {w.partOfSpeech}</h2>
                        <h2> <i>Definition:</i> {w.definitions[0].definition}</h2>
                        {w.definitions[0].example ? <h2> <i>Example:</i> {w.definitions[0].example}</h2> : null}
                        {w.definitions[0].synonyms.length > 0 ? <h2> <i>Synonyms:</i> {w.definitions[0].synonyms.map(x => (
                            <ul>
                                <li>{x}</li>
                            </ul>
                        ))}</h2> : null }
                        {w.definitions[0].antonyms.length > 0 ? <h2> <i>Antonyms:</i> {w.definitions[0].antonyms.map(x => (
                            <ul>
                                <li>{x}</li>
                            </ul>
                        ))}</h2> : null }
                    </div>
                ))}
            </div>
        ))} </div>
    )
}

//<a href={`https://youglish.com/pronounce/`+ el.word +`/english`} > How to pronounce the word </a>