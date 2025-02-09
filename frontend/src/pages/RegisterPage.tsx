import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

interface RegisterInputs {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<RegisterInputs>();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit: SubmitHandler<RegisterInputs> = async (values) => {
    await signup(values);
  };

  return (
    <div className="p-4 rounded border border-2" style={{ maxWidth: "500px", margin: "0 auto" }}>
      {registerErrors.map((error: string, i: number) => (
        <div key={i} className="alert alert-danger">
          {error}
        </div>
      ))}
      <p className="text-center">¡Control de inventario, rápido y sin estrés! 😎</p>
      <h1 className="text-center">Regístrate ahora</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center">
        <div className="form-group p-2">
          <input
            type="text"
            {...register("username", { required: true })}
            className="form-control"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <span className="text-danger">El nombre de usuario es requerido</span>
          )}
        </div>

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
    
        <button
          type="submit"
          className="btn btn-danger btn-block mt-3 w-100"
        >
          Registrarse
        </button>
      </form>
      <p className="text-center mt-3">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-warning">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;