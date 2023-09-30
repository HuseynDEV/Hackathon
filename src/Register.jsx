import { useState } from "react";
import FormInput from "./components/FormInput";
import { useNavigate } from "react-router-dom";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",

  });
  const navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "İstifadəçi adı",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "İstifadəçi adı",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "şifrə",
      placeholder: "Şifrə",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Şifrə",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.username==='admin' && values.password==='admin'){
navigate('/profile')
    }
    else{
        alert("Xahiş olunur məlumatları düzgün daxil edin")
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="signIn" onSubmit={handleSubmit}>
        <h1>Daxil ol</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleSubmit} >Təsdiqlə</button>
      </form>
    </div>
  );
};

export default App;