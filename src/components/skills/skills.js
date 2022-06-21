import { Button } from "bootstrap";

const Skills = () => {
    return (
        <>

            <div className="bg-dark mt-5">

                <div>
                    <div className="text-light  rgba-stylish-strong py-5 px-4">
                        <div className="py-5">


                            <h1 className="text-light text-center fw-bold"> Skills</h1>
                            <p className="mb-4 pb-2 px-md-5 mx-md-5 fw-bold mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.</p>


                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card text-white bg-dark mb-3">
                                    <div className="card-body">
                                        <h3 className="card-title text-center fw-bold">MY FOCUS</h3>
                                        <hr className="fw-bold" />
                                        <h4 className="card-title m-4 fw-bold">UI/UX Design Developeing</h4>
                                        <h4 className="card-title m-4 fw-bold">Responsive Web Design</h4>
                                        <h4 className="card-title m-4 fw-bold">Web Api</h4>
                                        <h4 className="card-title m-4 fw-bold">Database</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-3 col-md-6 col-sm-6">

                                <div className=" container " style={{ maxWidith: "300px" }}>

                                    <h3>Html</h3>
                                    <div className="progress mt-4">

                                        <div
                                            className="progress-bar progress-bar-striped"
                                            role="progressbar"
                                            style={{
                                                width: "10%",
                                                ariaValuenow: "10",
                                                ariaValuemin: "0",
                                                ariaValuemax: "100"
                                            }}
                                        ></div>
                                    </div>
                                    <h3>CSS</h3>
                                    <div className="progress mt-4">
                                        <div
                                            className="progress-bar progress-bar-striped bg-success"
                                            role="progressbar"
                                            style={{
                                                width: "25%",
                                                ariaValuenow: "25",
                                                ariaValuemin: "0",
                                                ariaValuemax: "100"
                                            }}
                                        ></div>
                                    </div>
                                    <h3>Javascript</h3>
                                    <div className="progress mt-4">
                                        <div
                                            className="progress-bar progress-bar-striped bg-info"
                                            role="progressbar"
                                            style={{
                                                width: "50%",
                                                ariaValuenow: "50",
                                                ariaValuemin: "0",
                                                ariaValuemax: "100"
                                            }}
                                        ></div>
                                    </div>
                                    <h3>Bootstrap</h3>
                                    <div className="progress mt-4">
                                        <div
                                            class="progress-bar progress-bar-striped bg-warning"
                                            role="progressbar"
                                            style={{
                                                width: "75%",
                                                ariaValuenow: "75",
                                                ariaValuemin: "0",
                                                ariaValuemax: "100"
                                            }}
                                        ></div>
                                    </div>
                                    <h3>Angular</h3>
                                    <div className="progress mt-4">
                                        <div
                                            class="progress-bar progress-bar-striped bg-danger"
                                            role="progressbar"
                                            style={{
                                                width: "50%",
                                                ariaValuenow: "50",
                                                ariaValuemin: "0",
                                                ariaValuemax: "100"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}
export default Skills;


