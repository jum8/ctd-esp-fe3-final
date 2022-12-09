import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context';



const Home = () => {
	const {dentists, theme} = useGlobalStates();

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
				{dentists.map(dentist => (
					<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} showFavButton={true}/>
				))}
      </div>
    </main>
  )
}

export default Home