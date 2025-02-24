export default function Hero(){
    return (
        <>
            <h1> Coffe Tracking for coffee <abbr title="An enthusiast or 
            devotee">Friends</abbr>!</h1>
            <div className="benefits-list">
                <h3 className="font-bolder">try <span 
                className="text-gradient">Caffeind</span> and start ...</h3>
                <p>Tracking ever coffee</p>
                <p>Measuring your blood caffine levels</p>
                <p>Costing and quantifying your addition</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know</h3>
                </div>
                <h5>That caffine&apos;s half-life is about 5 hours?</h5>
                <p>this means that after 5 hours ,hlaf the caffine you consumed
                    is still in your system, keeping you alert longer! so if you
                    drink a cup od coffee with 200 mg of caffine, 5 hours, later,
                    you&apos;ll still jave about 100mg of caffine in your system.
                </p>
            </div>
        </>
    )
}