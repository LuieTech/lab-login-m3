import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { createUser } from "../services/api-service"



function SignUpPage() {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleSignUp (data) {
    createUser(data)
      .then(() => navigate('/login'))
      .catch((error) => console.log("Error al crear el usuario: ", error));
  }

  return (
    <>
      <h1>Sign Up Page</h1>
      <div className="d-flex justify-content-center ">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>  
    </>
  )
}

export default SignUpPage