export const cour = [
    {
        idComposant,
        type: 'title',
        content: {
            title: "L’essentiel du cours",
            importance: 1,
        },
        order: 1
    },
    {
        idComposant,
        type: 'text',
        content: "L’essentiel du cours",
        order: 3
    },
    {
        idComposant,
        type: 'media',
        content: {
            url: "assets/images/themes/rocket_league.jpg",
            size: 'full'
        },
        order: 2
    },
    {
        idComposant,
        type: 'notes',
        content: {
            type: 'infos',
            content: 'Astuce : pour savoir si un verbe en -ir est du 2e ou du 3e groupe, on le conjugue au participe présent ou au présent de l’indicatif',
        },
        order: 4
    },
    {
        idComposant,
        type: 'listes',
        content: {
            liste: [
                ' Le 1er groupe rassemble',
                ' Le 1er groupe rassemble',
                ' Le 1er groupe rassemble',
                ' Le 1er groupe rassemble',
            ]
        },
        order: 5
    },
]

const categories = {
    category: {
        name: 'etudes',
        theme:[
            {
                idTheme: 1,
                name: 'histoire',
                image: 'histoire.jpeg'
            },
            {
                idTheme: 2,
                name: 'geographie',
                image: 'geographie.jpeg'
            }
        ]
    }
}

const users = [
    {
        pseudo: 'john62',
        email: 'john@free.fr',
        password: '1234',
        image: null,
        statut: 'connecté',
        role: 'normal', //rôle de base pour tout les utilisateur 
        questions: [
            {
                intitule: 'qui est-ce',
                type:'qcm',
                status: 'public',
                reponses:[ 
                    {
                        value: 'toi',
                        isCorrect: false,
                    },
                    {
                        value: 'lui',
                        isCorrect: true,
                    },
                ],
                theme: 'relation avec idThéme',
                user: 'relation avec idUser',
            },
            {
                intitule: 'qui est-ce',
                type:'qcm',
                reponses:[ 
                    {
                        value: 'toi',
                        isCorrect: false,
                    },
                    {
                        value: 'lui',
                        isCorrect: true,
                    },
                ],
                theme: 'relation avec idThéme',
                user: 'relation avec idUser',
            },
        ],
    }, 
    {
        pseudo: 'test',
        email: 'test@free.fr',
        password: '1234',
        image: null,
        statut: 'non connecté',
        role: 'restricted', // rôle qui interdit la création 
        questions: [
            {
                intitule: 'qui est-ce',
                type:'qcm',
                status: 'restricted',
                reponses:[ 
                    {
                        value: 'toi',
                        isCorrect: false,
                    },
                    {
                        value: 'lui',
                        isCorrect: true,
                    },
                ],
                theme: 'relation avec idThéme',
                user: 'relation avec idUser',
            }
        ]
    }
]