import './App.css'

function App() {

  return (
    <>
      <section>
        <h2>Form in React</h2>
      </section>
      <section>
        <div></div><span>First Name</span><input />
        <div><span>Last Name</span><input /></div>
        <div><span>Enter Email</span><input /></div>
        <div><span>Contact</span><input /></div>
        <div>Gender*<input type='radio' checked />Male<input type='radio' />Female<input type='radio' />Others</div>
        <div>Your best Subject<input type='checkbox' checked />English<input type='checkbox' />Maths<input type='checkbox' />Physics</div>
        <div>upload Resume<input type='file' /></div>
        <div>Enter URL*<input /></div>
        <div>Select your choice<select></select></div>
        <div>About<textarea placeholder='about your self' /></div>
      </section>
      <section>
        <span>Submit or reset</span>
        <div>
          <button>Reset</button>
          <button>Submit</button>
        </div>
      </section>
    </>
  )
}

export default App
