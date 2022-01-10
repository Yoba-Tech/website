
import banks from "../images/banks.png"
import banks2 from "../images/banks2.png"
import banks3 from "../images/banks3.png"

const Details = () => {
    return (
        <div className="container">
            <section className="details">
                <div className="row">
                    <div className="col-text">
                        <h2>
                            One physical card tied to all bank accounts
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </div>
                    <div className="col-image">
                        <img src={banks} width={499} height={420} alt="bank card" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-image">
                        <img src={banks2} width={499} height={420} alt="bank card" />
                    </div>
                    <div className="col-text">
                        <h2>
                            One physical card tied to all bank accounts
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-text">
                        <h2>
                            One physical card tied to all bank accounts
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </div>
                    <div className="col-image">
                        <img src={banks3} width={499} height={420} alt="bank card" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details
