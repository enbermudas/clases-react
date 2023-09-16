import useStore from "../../store";

export default function Clase8P2() {
  const { username, setUsername } = useStore(); // Te da todo el estado
  // const obj = useStore((state) => ({ nombre: state.username })); // Te deja moldear el estado a placer
  // const username = useStore((state) => state.username); // Te deja traer una fracción del estado

  return (
    <div>
      {username}

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  )
}
