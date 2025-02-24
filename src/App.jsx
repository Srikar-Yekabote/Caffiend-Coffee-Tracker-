// import React from 'react'
import Layout from './components/layout'
import Hero from './components/Hero'
import CoffeeFrom from './components/coffeeFrom'
import Stats from './components/Stats'
import History from './components/History'
import { userAuth } from './context/AuthContext'
import { coffeeConsumptionHistory } from './utils'





function App() {

  const {globalUser,isLoading,globalData} =userAuth()
  const isAuthenticated =globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats/>
      <History/>
    </>
  )



  return (
    <Layout>
      <Hero/>
      <CoffeeFrom isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isLoading) && (
        <p>Loading data ...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App