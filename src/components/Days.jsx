import React from 'react';

const Days = () => {
    return (
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="card card-width col-6 row-width">
                <h5>Lunes</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width col-6 row-width">
                <h5>Martes</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width col-6 row-width">
                <h5>Miércoles</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width col-6 row-width">
                <h5>Jueves</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width row-width">
                <h5>Viernes</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width row-width">
                <h5>Sábado</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width row-width">
                <h5>Domingo</h5>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
        </div>
    );
};

export default Days;