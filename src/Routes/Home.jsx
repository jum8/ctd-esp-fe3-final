import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const {dentists} = useGlobalStates();

  return (
    <main className="" >
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