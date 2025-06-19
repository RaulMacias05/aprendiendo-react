import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Pablo Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    },
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}

// export function App () {
//     /*const [name, setName] = useState('midudev')
//     console.log('Render with name: ', name)*/

//     // Se pueden hacer comentarios como en JS
//     /* También así */

//     // const [isFollowing, setIsfollowing] = useState(true)

//     return (
//         <section className='App'>
//             <TwitterFollowCard userName="midudev"/*{name}*/ initialIsFollowing>
//                 Miguel Ángel Durán
//             </TwitterFollowCard>

//             <TwitterFollowCard userName="pheralb">
//                 Pablo Heraldo
//             </TwitterFollowCard>


//             {/*
//             <button onClick={() => {setIsfollowing(!isFollowing)}}>
//                 Cambiar estado de app
//             </button>
//             */}

//             {/* Pero para ponelos en el return se debe hacer así */}
//             {/* Esto no es recomendable */}
            
//             {/*
//             <TwitterFollowCard userName='pheralb'>
//                 Pedro Hernández
//             </TwitterFollowCard>
//             */}
            
//             {/*
//             <button onClick={() => setName('pedromichel')}>
//                 Cambio nombre
//             </button>
//             */}
            
//         </section>
//     )
// }

// export function App () {
//     const pheralb = { isFollowing: false, userName: 'pheralb'}
//     const arisanchez2005 = { isFollowing: true, userName: 'arisanchez2005'}

//     return (
//         <section className='App'>
//             <TwitterFollowCard isFollowing userName="midudev">
//                 Miguel Ángel Durán
//             </TwitterFollowCard>

//             <TwitterFollowCard isFollowing={false} userName="elonmusk">
//                 Elon Musk
//             </TwitterFollowCard>
            
//             <TwitterFollowCard { ...pheralb}>
//                 Pedro Hernández
//             </TwitterFollowCard>

//             <TwitterFollowCard { ...arisanchez2005}>
//                 Ariel Macías
//             </TwitterFollowCard>

//             <TwitterFollowCard isFollowing={false}>
//                 ...
//             </TwitterFollowCard>
//         </section>
//     )
// }

// export function App () {
//     const formattedUserName = <span>@midudev</span>

//     return (
//         <section className='App'>
//             <TwitterFollowCard
//                 formattedUserName={formattedUserName}
//                 isFollowing
//                 userName="midudev"
//                 name="Miguel Ángel Durán"/>

//             <TwitterFollowCard
//                 formattedUserName={formattedUserName}
//                 isFollowing={false}
//                 userName="pheralb"
//                 name="Pablo Hernández"/>

//             <TwitterFollowCard
//                 formattedUserName={formattedUserName}
//                 isFollowing
//                 userName="vxnder"
//                 name="Vanderhart"/>

//             <TwitterFollowCard
//                 formattedUserName={formattedUserName}
//                 isFollowing
//                 userName="AriSanchez2005"
//                 name="Ariel Macías"/>
//         </section>
//     )
// }