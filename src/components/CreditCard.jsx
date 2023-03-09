import React from "react";
import Card from "./Card";
import { register } from 'swiper/element/bundle';
register();

function CreditCard() {

    return(
        <section className="box creditCard">
            <div className="creditCard-box_top">
                <h3>Credit Card</h3>
                <button className="creditCard-box_top-add button">+</button>
            </div>
            
            <div className="flexCenter">
                <div className="creditCard-box_cards-slide">
                    <swiper-container
                            effect={'cards'}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}                    
                        >
                            <swiper-slide>
                                <Card
                                    numero={'4111111111111111'}
                                    nombre={'Jared azcarate'}
                                    expiracion={'0626'}
                                    codigo={'123'}
                                />
                            </swiper-slide>
                            <swiper-slide>
                                <Card
                                    numero={'5555111111111111'}
                                    nombre={'Jared azcarate'}
                                    expiracion={'0626'}
                                    codigo={'123'}
                                />
                            </swiper-slide>
                            <swiper-slide>
                                <Card
                                    numero={'5066991111111118'}
                                    nombre={'Jared azcarate'}
                                    expiracion={'0626'}
                                    codigo={'123'}
                                />
                            </swiper-slide>
                            <swiper-slide>
                                <Card
                                    numero={'6062 8288 8866 6688'}
                                    nombre={'Jared azcarate'}
                                    expiracion={'0626'}
                                    codigo={'123'}
                                />
                            </swiper-slide>
                            
                    </swiper-container>
                </div> 
            </div>
                   
        </section>
    )
}

export default CreditCard;