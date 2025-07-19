import "./style.css";
//import Trash from "../public/download.png";

function Home() {
  // Dados mockados de usuários para demonstração
  const usuarios = [
    {
      id: 1,
      nome: "João Silva",
      idade: 28,
      email: "joao.silva@email.com",
    },
    {
      id: 2,
      nome: "Maria Santos",
      idade: 32,
      email: "maria.santos@email.com",
    },
    
  ];

  return (
    <div className="container">
      {/* Formulário de cadastro */}
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Digite seu nome completo" />
        <input name="idade" type="number" placeholder="Digite sua idade" />
        <input name="email" type="email" placeholder="Digite seu email" />
        <button type="button">Cadastrar</button>
      </form>

      {/* Lista de usuários */}
      {usuarios.length > 0 ? (
        usuarios.map((usuario) => (
          <div key={usuario.id} className="user-card">
            <div className="user-info">
              <p>
                <strong>Nome:</strong> {usuario.nome}
              </p>
              <p>
                <strong>Idade:</strong> {usuario.idade}
              </p>
              <p>
                <strong>Email:</strong> {usuario.email}
              </p>
            </div>
            <button className="delete-button">
              <img img src="" alt="Deletar" />
              {/* Quando tiver o ícone: <img src={Trash} alt="Deletar" /> */}
            </button>
          </div>
        ))
      ) : (
        <div className="no-users">
          <p>Nenhum usuário cadastrado ainda</p>
        </div>
      )}
    </div>
  );
}

export default Home;
