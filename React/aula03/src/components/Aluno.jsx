import React from "react";

function Aluno({ nome, email, curso }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>{email}</p>
      <p>{curso}</p>
    </div>
  );
}

function App() {
  const alunos = [
    { nome: "Lucas Vilhena", email: "lucasfreirevilhena@gmail.com", curso: "S.I" },
    { nome: "Julia de Almeida", email: "julialmeida@gmail.com", curso: "R.I" },
    { nome: "Andre Wamderley", email: "wanport@gmail.com", curso: "A.D.S" }
  ];

  return (
    <div>
      <h1>Lista dos alunos</h1>
      {alunos.map((aluno) => (
        <Aluno key={aluno.email} {...aluno} />
      ))}
    </div>
  );
}

export default App;