import Info from './Info'
import classes from './Repo.module.css'
import { Link } from "react-router-dom"
import { RepoProps } from '../types/Repo'

function Repo( {infos} : any) {
  return (
    <>
      <Link to={`/`} className={classes.link}>Voltar</Link>
      <div className={classes.wrap}>
        <h3>Explore os repositórios do usuário: {infos[0]['owner'].login}</h3>
        <div className={classes.repo}>
          <div>
            {infos.map((info: RepoProps) => (
              <Info name={info.name} language={info.language} html_url={info.html_url} stargazers_count={info.stargazers_count} forks_count={info.forks_count} watchers_count={info.watchers_count} description={info.description}  key={info.id} />
            ))}
          </div>
        </div>
      </div>
    </>


  )
}

export default Repo