import React from 'react';

const Notes = () => {
    return (
        <div>
            <div className="card card-width">
                <h3>Objetivos</h3>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width" > 
                <h3>Prioridades</h3>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
            <div className="card card-width">
                <h3>Notas</h3>
                <textarea 
                    className="text-area"
                    aria-label="With textarea" 
                    rows="4" cols="50"
                ></textarea>
            </div>
        </div>
    );
};

export default Notes;