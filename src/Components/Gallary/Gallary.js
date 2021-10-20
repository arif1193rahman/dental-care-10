import React from 'react';
import './Gallary.css';

const Gallary = () => {
    return (
        <div className="gallery-main">
            <div className="row">
                <h1 className="gallery-head"><u>Gallery of Our Clinic</u></h1>
                <p className="gallery-p">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent <br /> claritatem insitamconsequat duis autem facilisis at vero eros</p>
                <div className="col-lg-6 col-sm-12 image">
                    <img className="img-fluid" src="https://i.ibb.co/fGYhdcB/3750050.jpg" alt="" />

                    <img src="https://i.ibb.co/dr01j1f/Cropped-shot-of-a-female-doctor-using-a-digital-tablet.jpg" alt="" />
                    <img src="https://i.ibb.co/M1rvmmF/images.jpg" alt="" />
                </div>
                <div className="col-lg-6 image">
                    <img src="
https://i.ibb.co/V232ZQR/Young-middle-eastern-nurse-using-digital-tablet-in-corridor-while-wearing-surgical-mask-Busy-mixed-r.jpg" alt="" />
                    <img src="https://i.ibb.co/cDLBGbS/photo-1527613426441-4da17471b66d.jpg" alt="" />
                    <img src="https://i.ibb.co/M1rvmmF/images.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Gallary;




