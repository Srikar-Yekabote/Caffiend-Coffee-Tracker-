import React from 'react'
import CoffeeFrom from './components/CoffeeFrom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import History from './components/History'
import Stats from './components/Stats'
import { userAuth } from './context/AuthContext'





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