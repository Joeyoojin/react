import { useState } from "react";
import { SignInForm } from "../components/Form";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSignInSubmit = () => {
    console.log(formData);
    alert("로그인 완 료!");
    // add api call for sign in here
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className=" font-bold text-4xl">Sign In</h3>
      {/* 추가 👇🏻 */}
			<SignInForm 
				formData={formData} 
				setFormData={setFormData} 
				handleSignInSubmit={handleSignInSubmit} 
			/>
      {/* 추가 👆🏻 */}
    </div>
  );
};

export default SignInPage;
