
import classes from './Loading.module.css'

function Loading() {
    return (
        <div className={classes.loading}>
            <div className={classes.ring}></div>
        </div>
    )
}

export default Loading