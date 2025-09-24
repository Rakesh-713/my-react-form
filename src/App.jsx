import "./App.css";
import { useState } from "react";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender: "Male",
  subject: "English",
  url: "",
  choice: "",
  about: "",
};
function App() {
  const [data, setData] = useState(initialState);

  const handleSubmit = () => {
    // setData(initialState);
    console.log(data, "submit data");
  };
  const handleReset = () => {
    setData(initialState);
    console.log(data, "reset data");
  };

  return (
    <>
      <section>
        <h2>Form in React</h2>
      </section>
      <section>
        <form>
          <div>
            <span>First Name</span>
            <input
              type="text"
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              value={data.firstName}
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <span>Last Name</span>
            <input
              type="text"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              value={data.lastName}
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <span>Enter Email</span>
            <input
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <span>Contact</span>
            <input
              type="text"
              onChange={(e) => setData({ ...data, contact: e.target.value })}
              value={data.contact}
              placeholder="Enter mobile number"
            />
          </div>
          <div onChange={(e) => setData({ ...data, gender: e.target.value })}>
            Gender*
            <input type="radio" value="Male" />
            Male
            <input type="radio" value="Female" />
            Female
            <input type="radio" value="Others" />
            Others
          </div>
          <div onChange={(e) => setData({ ...data, subject: e.target.value })}>
            Your best Subject
            <input type="checkbox" value="English" />
            English
            <input type="checkbox" value="Maths" />
            Maths
            <input type="checkbox" value="Physics" />
            Physics
          </div>
          <div>
            upload Resume
            <input type="file" />
          </div>
          <div>
            Enter URL*
            <input
              type="text"
              onChange={(e) => setData({ ...data, url: e.target.value })}
              value={data.url}
              placeholder="Enter url"
            />
          </div>
          <div onChange={(e) => setData({ ...data, choice: e.target.value })}>
            Select your choice
            <select>
              <option value="option1">Option 1 Text</option>
              <option value="option2">Option 2 Text</option>
              <option value="option3">Option 3 Text</option>
            </select>
          </div>
          <div>
            About
            <textarea
              placeholder="about your self"
              type="text"
              onChange={(e) => setData({ ...data, about: e.target.value })}
              value={data.about}
            />
          </div>
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
  );
}

export default App;
