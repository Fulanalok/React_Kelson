import React from 'react'

const Aluno = ({ nome, email, curso, media }) => {
    return (
      <div>
      <React.Fragment>
        <h1>Nome: {nome}</h1>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {media >= 7 ? <strong> aprovado</strong> : <strong> reprovado </strong>}</p>
        </React.Fragment>
        </div>
    )
}

  function App() {
    const alunos = [
      { nome: "Lucas Vilhena", email: "lucasfreirevilhena@gmail.com", curso: "S.I", media:8 },
      { nome: "Julia de Almeida", email: "julialmeida@gmail.com", curso: "R.I", media: 9 },
      { nome: "Andre Wamderley", email: "wanport@gmail.com", curso: "A.D.S",media: 7.5 }
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

export default App
