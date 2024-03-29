import { useNavigate } from 'react-router-dom'

function Error404() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>Here be dragons</h1>
      <button onClick={() => navigate("/", { replace: true, state: { message: "hello" } })}>Go Home</button>
    </div>
  )
}

export default Error404