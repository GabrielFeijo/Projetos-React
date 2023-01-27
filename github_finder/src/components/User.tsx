import { UserProps } from "../types/User"

import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-router-dom"

import classes from './User.module.css'
function User({ login, bio, avatar_url, followers, following,public_repos,created_at, location }: UserProps) {

    const formatDate = (date: Date) =>{

        var date = new Date(date)
        return date.toLocaleDateString();
    
    }

    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {bio &&
                <p>{bio}</p>
            }
            {location &&
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            }

            <div className={classes.stats}>
                <div>
                    <p>Seguidores</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo</p>
                    <p className={classes.number}>{following}</p>
                </div>

            </div>
            <div>
                <p>Repositórios púlbicos:</p>
                <p className={classes.number}>{public_repos}</p>
            </div>
            <div>
                <p>Membro desde:</p>
                <p className={classes.number}>{formatDate(created_at)}</p>
            </div>

            <Link to={`/repo/${login}`}>Ver projetos</Link>
        </div>

    )
}

export default User