/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import arrow from '../../assets/images/arrow.png'
import styles from './WordToSearch.module.css'

export default () => {
    const {word, loading, error} = useSelector(state => state)
    return (
        <div className={styles.wordDefinitions}>
            <NavLink to="/"> <img className={styles.arrow} src={arrow} alt="arrow"/> </NavLink>
            <div className={styles.wordDefinitionsList}>
                {word.map(el => (
                    el.meanings.map((w, index) => (
                        <h2> <i>Definition {index+1}</i> : {w.definitions[0].definition}</h2>
                    ))
                ))}
            </div>
        </div>
    )
}