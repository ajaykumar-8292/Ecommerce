import { useState } from "react";

import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    alert(data.message);
  } catch (error) {
    console.error(error);
    alert("Backend server se connection nahi ho raha.");
  }
};





  
  return(
<>
<div className="h-150  bg-black pt-20">
<form  onSubmit={handleLogin} class="max-w-sm mx-auto shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-gray-800 h-100 pt-10 pb-10 pl-10 pr-10 rounded-sm">


  <div class="mb-5">
    <label for="email-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white">Your email</label>
    <input type="email" id="email-alternative"  value={email} 
    onChange={(e) => setEmail(e.target.value)}
    class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body text-white" placeholder="name@flowbite.com"  required />
  </div>



  <div class="mb-5">
    <label for="password-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white">Your password</label>
    <input type="password" id="password-alternative" value={password}
    onChange={(e) => setPassword(e.target.value)}
    class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body text-white" placeholder="••••••••" required />
  </div>


  <div class="flex items-start mb-5 text-white">
    <label for="remember-alternative" class="flex items-center h-5 text-white">
      <input id="remember-alternative" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft text-whit" required />
      <p class="ms-2 text-sm font-medium text-heading select-none text-white">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</p>
    </label>
  </div>




  <button type="submit" class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none cursor-pointer">Submit</button>
</form>
</div>
</>

  );
}

export default Login;