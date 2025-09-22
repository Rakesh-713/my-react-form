import './App.css'
import { useState } from 'react'
const initialState = {
  firstName: '', lastName: '', email: '', contact: '', gender: '', subject: '', url: '', choice: '', about: ''
}
function App() {

  const [data, setData] = useState(initialState);

  const handleSubmit = () => { setData(initialState) }
  const handleReset = () => { setData(initialState) }

  return (
    <>
      <section>
        <h2>Form in React</h2>
      </section>
      <section>
        <form>
          <div><span>First Name</span><input type="text" onChange={(e) => setData({ ...data, firstName: e.target.value })} value={data.firstName} /></div>
          <div><span>Last Name</span><input type="text" onChange={(e) => setData({ ...data, lastName: e.target.value })} value={data.lastName} /></div>
          <div><span>Enter Email</span><input type="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} /></div>
          <div><span>Contact</span><input type="text" onChange={(e) => setData({ ...data, contact: e.target.value })} value={data.contact} /></div>
          <div>Gender*<input type='radio' checked />Male<input type='radio' />Female<input type='radio' />Others</div>
          <div>Your best Subject<input type='checkbox' checked />English<input type='checkbox' />Maths<input type='checkbox' />Physics</div>
          <div>upload Resume<input type='file' /></div>
          <div>Enter URL*<input type="text" onChange={(e) => setData({ ...data, url: e.target.value })} value={data.url} /></div>
          <div>Select your choice<select>
            <option value="option1">Option 1 Text</option>
            <option value="option2">Option 2 Text</option>
            <option value="option3">Option 3 Text</option></select>
          </div>
          <div>About<textarea placeholder='about your self' type="text" onChange={(e) => setData({ ...data, about: e.target.value })} value={data.about} /></div>
        </form>
      </section>
      <section>
        <span>Submit or reset</span>
        <div>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </section>
    </>
  )
}

export default App
