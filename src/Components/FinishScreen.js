function FinishScreen({points,maxPoints,highScore}){

    const percentage=(points/maxPoints)*100;
    return (
    <>
        <p className='result'>You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)</p>
        <p className='highscore'>HighScore: {highScore} points</p>
    </>
    );
}

export default FinishScreen;