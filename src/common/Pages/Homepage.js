/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';
import {TweenMax, TimelineLite} from 'gsap';


export default class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.startAnim = this.startAnim.bind(this);
    }

    componentDidMount() {
        var tl = new TimelineLite({ paused : true });

        tl
        .to(this.block, 0.45, {width : '100%'})
        .to(this.blockIntro, 0.45, {width : '100%'}, '-=.20')
        .to(this.greeting, 0.05, {color : 'rgba(#000, 1)'})
        .to(this.intro, 0.05, {color : 'rgba(#000, 1)'}, '-=.10')
        .to(this.block, 0.35, {left : '100%'})
        .to(this.blockIntro, 0.35, {left : '100%'}, '-=.10')

        // Start delayed animation
        setTimeout( ()=>{ tl.play() } , 1200);

    }

    startAnim() {
        
    }

    render() {
        return(
            <div className="homepage">
            <Helmet
            title=" "
            meta={[
                {property: 'description',
                 content: 'Rodrigo Feijao, Front end developer'},
                ]} />

                <div className="shadow"></div>
                
                <div className="greeting" ref={(input) => { this.greeting = input; }} >
                    <span className="block" ref={(input) => { this.block = input; }}></span>
                    hello there.<br/>
                    My name is Rodrigo I’m a
                </div>
                <div className="intro" ref={(input) => { this.intro = input; }}>
                    <span className="block" ref={(input) => { this.blockIntro = input; }}></span>
                    Creative Technologist<br/>
                    and a problem solver,<br/>
                    based in central London.
                </div>

                <div className="cta">scroll</div>

            </div>
        )
    }
}