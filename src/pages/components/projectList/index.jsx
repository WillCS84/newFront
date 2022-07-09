import { useEffect, useState } from "react";
import { RepositoryItem } from "../projectItem";

import "../../../styles/list.scss"



export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch("https://api.github.com/users/WillCS84/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem  key={repository.name} repository={repository}/>
        })}
     </ul>
    </section>
  );
}