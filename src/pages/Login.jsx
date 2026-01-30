import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={login}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Enter Tracker
      </button>
    </div>
  );
}
