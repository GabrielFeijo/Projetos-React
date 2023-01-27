
import classes from './Info.module.css'
import { BiCodeAlt, BiStar, BiBookBookmark } from 'react-icons/bi'
import { AiOutlineFork, AiOutlineEye } from 'react-icons/ai'
import { RepoProps } from "../types/Repo"


function Info({ name, description, html_url, language, stargazers_count, forks_count, watchers_count }: RepoProps) {
    return (
        <div className={classes.box}>
            <h3 className={classes.titulo}>{name}</h3>
            {description &&
                <p className={classes.desc}>{description}</p>
            }
            <p className={classes.language}>
                <span>{<BiCodeAlt />}</span>
                {language}
            </p>
            <div className={classes.flex}>
                <div className={classes.info}>
                    <span>{<BiStar />}</span>
                    <p>{stargazers_count}</p>
                </div>
                <div className={classes.info}>
                    <span>{<AiOutlineFork />}</span>
                    <p>{forks_count}</p>
                </div>
                <div className={classes.info}>
                    <span>{<AiOutlineEye />}</span>
                    <p>{watchers_count}</p>
                </div>

            </div>
            <button className={classes.button} onClick={() => {   window.open(html_url, '_blank');}}>Ver código <BiBookBookmark /></button>

        </div>
    )
}

export default Info