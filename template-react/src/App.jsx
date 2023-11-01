import { useState } from 'react'
import '../src/styles/App.css'
import Card from './Components/Card'

function App() {

  const [user, setUser] = useState({
    nombre: '',
    oceano: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSumbit = (event) => {
    event.preventDefault()
    if(user.nombre.length > 2 && user.oceano.length > 5){
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
  }

  return (
    <div className='App'>
      <h1>Océanos</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder='Ingresa tu nombre' value={user.nombre} onChange={(event) =>{setUser({...user, nombre: event.target.value})
        setShow(false)}
      }/>
        <input type="text" placeholder='Ingresa un océano' value={user.oceano} onChange={(event) =>{setUser({...user, oceano: event.target.value})
        setShow(false)}
      }/>
        <button>Enviar</button>
      </form>
      {show && <Card nombre={user.nombre} oceano={user.oceano} />}
      {error && <h5 style={{color: 'red', background: 'white'}}>“Por favor chequea que la información sea correcta”.</h5>}
    </div>
  )
}

export default App
