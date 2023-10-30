
import { useForm } from 'react-hook-form'
import { login } from '../services/groups-service'
import { useNavigate } from 'react-router-dom'

function LoginPage() {


  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleLogin(data){

    login(data).then(() => {
      navigate("/patata")
    })

  }

  return (
    <>
    <h1>LoginPage</h1>
    <div className="d-flex justify-content-center ">
    <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>

          <input 
            type="email" 
            className="form-control" 
            id="email" 
            {...register('email')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input 
            type="password" 
            className="form-control" 
            id="password"
            {...register('password')}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>  
  </>
  )
}

export default LoginPage