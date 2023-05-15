import  React  from 'react'
import '../styles/tour_progress_bar.css'

function TourProgressBar({progress, manualSetProgress}) {
    return (
        <div className='tour-progress-bar-main' draggable={false}>
            {/* loop for 9 times to generate progress bar */}
            {[...Array(9)].map((_, i)=>{
                return (
                    <>
                        <div className='diamond-outer' onClick={()=>{manualSetProgress(i)}}>
                            <div className='diamond-inner' style={{opacity: progress[i]}}></div>
                        </div>
                        {i === 8 ? <></> : <div className='connector'></div>}
                    </>)
            })}
        </div>
    )
}

export default TourProgressBar;