import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Acceuil from "../pages/Acceuil/Acceuil";
import Connexion from "../pages/Connexion/Connexion";
import Qcm from "../pages/Qcm/Qcm";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const qcmData = {
    question: "Quelle est la langue utilisé ?",
    reponses: [
      {
        reponse: 'Espagnol',
        isCorrect: false
      },
      {
        reponse: 'Français',
        isCorrect: true
      },
      {
        reponse: 'Anglais',
        isCorrect: false
      },
      {
        reponse: 'Allemand',
        isCorrect: false
      }
    ] 
  }

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Acceuil />
            },
            {
                path: '/connexion',
                element: <Connexion />
            }, 
            {
                path: '/quizz',
                element: <Qcm qcm={qcmData} timer='10' />
            }
            /* {
                path: '/inscription',
                element: <Inscription />
            } */
        ]
    }
])