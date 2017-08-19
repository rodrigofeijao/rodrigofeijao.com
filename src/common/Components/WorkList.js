/**
 *  Libraries
 */
import React from 'react';
import ReactGlitch from 'react-glitch';

const WorkList = (props) =>
(
    <div className="list">

        <Item 
            image="/images/work/dog.jpg"
            title="Lorem Ipsum"
            website="example.com"
            url="http://example.com"
            active={props.active}
            />

        <Item 
            image="/images/work/dog.jpg"
            title="Lorem Ipsum"
            website="example.com"
            url="http://example.com"
            active={props.active}
            />

        <Item 
            image="/images/work/dog.jpg"
            title="Lorem Ipsum"
            website="example.com"
            url="http://example.com"
            active={props.active}
            />

    </div>
)

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = { active : false, image : false, glitching : 0 }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.onChangeFunc = this.onChangeFunc.bind(this)
    }

    show() {
        this.setState({ active : !this.state.active })
        this.props.active()
    }

    hide() {
        this.setState({ active : !this.state.active, glitching : 0 })
        this.props.active()
    }

    onChangeFunc(img) {
        this.setState({ image : img.target.src, glitching : this.state.glitching + 1 })
    }

    render() {

        return (
            <div className={`list__item ${(this.state.active)?'active':''}`} onClick={(!this.state.active)?this.show:false}>
                
                {(this.state.active)?<div className="list__item__close" onClick={this.hide}>Close</div>:false}
                
                <ReactGlitch
                    style={{ display: 'none' }}
                    onLoad={this.onChangeFunc.bind(this)}
                    src={this.props.image}
                    glitching={(this.state.active && this.state.glitching < 20)?true:false}
                    glitchOptions={{ 
                        seed: [0, 60],
                        quality: 90,
                        amount: 3,
                        iterations: [10, 5, 1, 100]
                    }}
                    speed={[60, 100, 10, 30, 10, 80, 10, 10, 100]}
                />

                <div className={`list__item__thumb ${(this.state.active)?'active':''}`} style={{ backgroundImage : `url(${(this.state.image)?this.state.image:this.props.image})` }}></div>
                <div className={`list__item__caption ${(this.state.active)?'active':''}`}>
                    {this.props.title} 
                    <a href={this.props.url} target="_blank">/ <span>{this.props.website}</span></a>
                </div>
            </div>
        )
    }
}

export default WorkList
