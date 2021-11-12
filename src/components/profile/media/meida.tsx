import classes from './media.module.scss'

const Media = () => {
    return (
        <div className={classes.media}>
            <div className={classes.media__content}>
                <p className={classes.media__label}>video: </p>
                <video width='250x' height='400px' controls>
                    <source src='video.mp4'/>
                </video>
                <p className={classes.media__label}>audio: </p>
                <audio controls>
                    <source src='note.wav'/>
                </audio>
            </div>
        </div>
    )
}

export default Media;