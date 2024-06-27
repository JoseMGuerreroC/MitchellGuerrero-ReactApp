import { SplitText } from '../../assets/gsap/splitText.js';
import { useEffect, useRef } from 'react';

function NavbarBrand() {
    const navIcon = useRef(null);
    const navPoint = useRef(null);
    let split;
    let hoverTl;

    useEffect(() => {
        if (navIcon.current) {
            split = new SplitText(navIcon.current, { type: 'chars' });
        }
    });

    function hoverBrand(hover) {
        if (!hoverTl) {

            hoverTl = gsap.timeline();
            hoverTl.to(split.chars, { color: '#ff00ff', stagger: 0.05 })
                .add('pointResizes')
                .to(navPoint.current, {
                    width: '12px',
                    height: '12px',
                    duration: .2,
                    ease: 'power1.inOut',

                }, '<', 'pointResizes')
                .to(navPoint.current, {
                    y: '-10px',
                    duration: .5,
                    yoyo: true,
                    repeat: -1,
                    ease: 'power1.out',
                    rotateY: '180deg'
                });
        }
        (hover) ? hoverTl.play() : hoverTl.seek('pointResizes').reverse();
    }

    return (
        <a href='#' className='navMenuBrand' onMouseEnter={() => hoverBrand(true)} onMouseLeave={() => hoverBrand(false)}>
            <p ref={navIcon}>Midier</p>
            <div ref={navPoint} className="navMenuPoint"></div>
        </a>
    )
}

export default NavbarBrand;