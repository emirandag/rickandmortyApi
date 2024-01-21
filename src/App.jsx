import './App.css'
import Characters from './pages/Characters/Characters'



const App = () => {

  return (
    <>
    <main className='main'>
      <div>
        <h1 className='font-title'>Rick and Morty</h1>
        <h1 className='font-border'>Rick and Morty</h1>
      </div>
      <div>
        <h2 className='font-title'>Characters</h2>
        <h2 className='font-border'>Characters</h2>
      </div>
      
      <Characters />
    </main>
      
    </>
  )
}

export default App
