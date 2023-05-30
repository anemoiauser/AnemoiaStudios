import  React  from 'react'
import '../styles/tour_progress_bar.css'

function TourProgressBar({progress, manualSetProgress, progressBarRef, left}) {
    return (
        <div className='tour-progress-bar-container' draggable={false}>
            <div className='tour-progress-bar-main'
                ref={progressBarRef}>
                {/* loop for n times to generate progress bar */}
                {[...Array(progress.length)].map((_, i)=>{
                    return (
                        <span key={`diamond-part-${i}`}>
                            <div className='diamond-outer' onClick={()=>{manualSetProgress(i)}}>
                                <div className='diamond-inner' style={{opacity: progress[i]}}></div>
                            </div>
                            {i === progress.length -1  ? <></> : <div className='connector'></div>}
                        </span>)
                })}
            </div>
        </div>
    )
}

export default TourProgressBar;