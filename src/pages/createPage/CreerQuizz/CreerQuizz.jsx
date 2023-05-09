import '../CreatePages.scss'
import { useState } from "react"

export function CreerQuizz () {

    const [mode, setMode] = useState(true)
    const [step, setStep] = useState(1)

    return (
        <div>
            <h1>Créer un quizz</h1>
            <div>
                <button onClick={() => { setMode(false) }}>
                    Création Rapide
                </button>
                <button onClick={() => { setMode(true) }}>
                    Création manuel
                </button>
            </div>
            {
                mode === false ? (
                    <form>
                        <div>
                            <label>Thémes</label>
                            <select>
                                <option value="histoire">Histoire</option>
                                <option value="react">React</option>
                                <option value="valorant">Valorant</option>
                                <option value="star_wars">Star wars</option>
                            </select>
                        </div>
                        <div>
                            <label >Nombre de questions</label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <label>Type de question</label>
                            <select>
                                <option value="qcm">QCM</option>
                                <option value="qcu">QCU</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <input type="radio" name="status" id="" />
                                <label >Privé</label>
                            </div>
                            <div>
                                <input type="radio" name="status" id="" />
                                <label htmlFor="status">Public</label>
                            </div>
                        </div>
                        <button type="submit">Terminer la création</button>
                    </form>
                ) : (
                    <div>
                        <div className={styles.stepCreate}>
                            <div className={styles.active}>
                                <span data-status='paramétres'>1</span>
                                <span></span>
                            </div>
                            <div className={ step >= 2 && styles.active}>
                                <span data-status='informations'>2</span>
                            </div>
                        </div>
                        <div>
                            <label >Nombre de question</label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="type" />
                                <label htmlFor="type">Quizz en solo</label>
                            </div>
                            <div>
                                <input type="checkbox" name="type" />
                                <label htmlFor="type">Quizz en lignes</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="radio" name="status" id="" />
                                <label >Privé</label>
                            </div>
                            <div>
                                <input type="radio" name="status" id="" />
                                <label htmlFor="status">Public</label>
                            </div>
                        </div>
                        {/* <div>
                            <input type="image" src="../../assets/images/insert-picture-icon.png" width='50'  />
                            <label htmlFor="">Miniature pour le quizz</label>
                        </div> */}
                        <button type="submit" onClick={() => setStep(2)}>Suivant</button>
                    </div>
                )

            }
        </div>
    )
}