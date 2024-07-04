import React from 'react'
import "./infocard.css"
import { products } from "../helpers/products"

export default function InfoCards() {
    return (
        <section className="info-card-container">
            <h2 className="info-card-text text-center">Explore our options</h2>
            <div className="info-cards-container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-content text-center">
                            <h3>Daily</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, Porro maxime, you sit. sequi tempoributes tribe ui/ux.</p>
                            <p> Porro maxime fugit ad, sequi temporibus iure repellat.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur,equi temporibus iure repellat. sequi temporibus.</p>
                            <p>Porro maxime fugit ad, </p>
                            <p>Ttemporibus orem ipsum dolor sit amet ,equi iure repellat. sequi consectetur.</p>
                            <br />
                            <h6 className="text-center">$100.00</h6>
                            <button className="daily">Daily Subscription</button>
                        </div>
                    </div>
                </div>
                <div className="card-container sticky-card-container">
                    <div className="card sticky-card">
                        <div className="card-content text-center">
                            <h3 className="text-center">Weekly</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,equi temporibus iure repellat. sequi temporibus.</p>
                            <p> Porro maxime fugit ad, </p>
                            <br />
                            <p>
                                Amet, consectetur adipisicing elit. Quos debitis deleniti quia sed iusto. Labore dolores praesentium, vero magnam,
                                officia illum velit mollitia, quo at maxime fuga deserunt sapiente consectetur architecto necessitatibus veniam?
                                Esse distinctio necessitatibus, aperiam dolore earum magni!
                            </p>
                            <br />
                            <h6 className="text-center">$890.00</h6>
                            <button className="weekly">Weekly Subscription</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-cards-container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-content text-center">
                            <h3 className="text-center">Monthly</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, Porro maxime, you sit. sequi tempoributes tribe ui/ux.</p>
                            <p>Porro maxime fugit ad, sequi temporibus iure repellat.</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur,equi temporibus iure repellat. sequi temporibus.</p>
                            <p>Amet, consectetur adipisicing elit. Quos debitis deleniti quia sed iusto. Quo at maxime fuga deserunt sapiente consectetur architecto necessitatibus veniam? Esse distinctio necessitatibus, aperiam dolore earum magni!</p>
                            <br />
                            <h6 className="text-center">$760.00</h6>
                            <button className="monthly">Monthly Subscription</button>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-content text-center">
                            <h3 className="text-center">Yearly</h3>
                            <p>
                                Amet, consectetur adipisicing elit. Quos debitis deleniti quia sed iusto. Labore dolores praesentium,
                                vero magnam, officia illum velit mollitia, quo at maxime fuga deserunt sapiente consectetur
                                architecto necessitatibus veniam? Esse distinctio necessitatibus, aperiam dolore earum magni!
                            </p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, Porro maxime, you sit. sequi tempoributes tribe ui/ux.</p>
                            <p>Porro maxime fugit ad, sequi temporibus iure repellat.</p>
                            <br />
                            <h6 className="text-center">$100.00</h6>
                            <button className="yearly">Yearly Subscription</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

