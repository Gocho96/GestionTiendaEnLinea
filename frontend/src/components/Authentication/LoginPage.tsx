import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState: {errors }} = useForm<LoginInputs>();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    signin(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mis-productos");
    }
  }, [isAuthenticated]);

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
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div className="form-group p-2">
            <input
              type="email"
              {...register("email", { required: true })}
              className="form-control"
              placeholder="Correo electrónico"
            />
            {errors.email && (
              <span className="text-danger">El email es requerido</span>
            )}
          </div>

          <div className="form-group p-2">
            <input
              type="password"
              {...register("password", { required: true })}
              className="form-control"
              placeholder="Contraseña"
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
