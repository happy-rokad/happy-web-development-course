import './App.css';
import cardimg1 from './img3.avif'

function Cards() {
    return (
        <>
            <div className='newcard'>
                <div class="card">
                    <img src={cardimg1} class="card-img-top" alt="cardimg1" />
                    <div class="card-body">
                        <h5 class="card-title"> Nature Content </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary"> Click Here </a>
                    </div>
                </div>
                <div class="card">
                    <img src={cardimg1} class="card-img-top" alt="cardimg1" />
                    <div class="card-body">
                        <h5 class="card-title"> Nature Content </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary"> Click Here </a>
                    </div>
                </div>
                <div class="card">
                    <img src={cardimg1} class="card-img-top" alt="cardimg1" />
                    <div class="card-body">
                        <h5 class="card-title"> Nature Content </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary"> Click Here </a>
                    </div>
                </div>
            </div>
    </>
    );
}

export { Cards };