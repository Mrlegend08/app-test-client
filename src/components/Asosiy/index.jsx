import React from 'react'
import "./index.css"

import { questions } from '../../api/api'

import FlagIcon from '@mui/icons-material/Flag';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
const Asosiy = () => {
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://f3bb-185-203-236-230.ngrok-free.app/');
                console.log(response.data);
            } catch (error) {
                console.log(error.message)
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <header className='site-header'>
                <div className="container">
                    <div className="site-header__wrapper">
                        <span className='site-header__time'>00:01:26</span>
                        <div className="site-header__end">
                            <CloseIcon />
                            <FlagIcon />
                        </div>
                    </div>
                </div>
            </header>

            <main className='site-main'>
                <section className='test-section'>
                    <div className="container">
                        <div className="test-section__wrapper">
                            <ul className="test-section__list">
                                {questions.map((item, index) => {
                                    return (
                                        <li key={index} className='test-section__item'>
                                            <h3 className='test-section__item-title'>
                                                {index + 1}.{item.question}
                                            </h3>
                                            <div className="test-section__answers">
                                                {
                                                    item.answers.map((value, j) => {
                                                        return (
                                                            <div style={{ display: "flex", alignItems: 'center', cursor: 'pointer' }}><span className='test-section__dumalo'></span>
                                                                <p key={j} className='test-section__answer'>{value}</p></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Asosiy
