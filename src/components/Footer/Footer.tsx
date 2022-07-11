import React from "react";
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <img src='/img/swiat-atrakcji-logo.png' alt="Brak zdjęcia"/>
                </div>
                <div className="footer-item">
                    <p>Projekt zaliczeniowy dla MegaK.pl</p>
                    <img className="footer-item_img-partner" src='https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png' alt="Brak zdjęcia"/>
                </div>
            </div>
                <div className="footer-copy">
                <p>© Copyright KamilF for MegaK</p>
                </div>
            </footer>
        </>
    )
}
