 
import "./App.css";

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name, email,password};
    console.log(user); 
 
    // fetch('http://localhost:5000/users', {
    //   method:
    // })
    // .then(res => res.json());
    // .then(data => {
    //   console.log(data)
    // })
  }

  return (
    <>
      <h2>Simple CRUD </h2>
      <h3>Abdullah all Mojahid</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" /> <br />
        <input type="email" name="email" placeholder="E-mail" /> <br />
        <input type="password" name="password" placeholder="password" /> <br />
        <input type="submit" className="sunmit" />
      </form>
    </>
  );
}

export default App;
