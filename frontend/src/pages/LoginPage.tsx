import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/AuthService";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register, formState: { errors },} = useForm<LoginInputs>();
  const { errors: signinErrors } = useAuth();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({email, password});
      localStorage.setItem("token", response.data.token);
      navigate("/mis-productos");
    } catch (error) {
      toast.error("Usuario y/o contraseña incorrecta");
      console.log(error)
    }
  };


  return (
    <div className="p-4 rounded border border-2" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div
        className="bg- p-4 rounded"
        style={{ maxWidth: "500px", width: "100%" }}
      >

      {signinErrors.map((error, i) => (
          <div key={i} className="alert alert-danger">
            {error}
          </div>
        ))}

        <p className="text-center">📦 ¡Bienvenido a la revolución del inventario! 🚀</p>
        <h1 className="text-center mb-4">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="text-center">

          <div className="form-group p-2">
            <input
              {...register("email", { required: true })}
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)} required
            /> 
            {errors.email && (
              <span className="text-danger">El email es requerido</span>
            )}
          </div>

          <div className="form-group p-2">
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)} required
            />
            {errors.password && (
              <span className="text-danger">La contraseña es requerida</span>
            )}
          </div>


          <button type="submit" className="btn btn-danger btn-block mt-3 w-100">
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center mt-3">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-warning">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
