import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const pheralb = { isFollowing: false, userName: 'pheralb'}
    const arisanchez2005 = { isFollowing: true, userName: 'arisanchez2005'}

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
            
            <TwitterFollowCard { ...pheralb}>
                Pedro Hernández
            </TwitterFollowCard>

            <TwitterFollowCard { ...arisanchez2005}>
                Ariel Macías
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false}>
                ...
            </TwitterFollowCard>
        </section>
    )
}

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