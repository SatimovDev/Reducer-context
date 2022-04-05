import { useContext , useState } from 'react';
import {Context} from './context/Context';

function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')
  
  const cont = useContext(Context)

  function submitHandler(event){
    event.preventDefault()
    cont.addPupil(name, surname, age)
  }

  function removePupil(id) {
    cont.removePupil(id)
  }

  return (
    <div className="App ml-96">
    <form onSubmit={event => submitHandler(event)} className=" max-h-96 max-w-xs mt-60 ml-96  rounded border shadow p-10">
      <h1 className="test-3xl mb-5 flex justify-center items-center gap-4 ">
        New Product
      </h1>
      <div className="mb-5">
      <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder='name' />
      </div>
      <div className="mb-5">
      <input value={surname} onChange={event => setSurname(event.target.value)} type="text" placeholder='surname' />
      </div>
      <div className="mb-5">
      <input value={age} onChange={event => setAge(event.target.value)} type="number" placeholder='age' />
      </div>
      <button className="w-full p-3 text-lg bg-blue-300 rounded font-semibold text-white hover:bg-blue-500">
        Send
      </button>
    </form>

    <ul>
      {
        cont.state.map((item, index) => {
          return <li >
            name:{item.name},
            surname:{item.surname},
            age:{item.age}
            <button onClick={() => removePupil(item.id)} key={index}> <br />
              REMOVE
              </button>
            </li>
        })
      }
    </ul>
    </div>
  );
}

export default App;
