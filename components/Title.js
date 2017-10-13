import React from 'react'

export default class Title extends React.Component {
    render() {
        let {title, color} = this.props
        return (
            <div>  
                {title}
                <style jsx>{`
                    div {
                        margin-bottom: 30px;
                        color: ${color};
                        font-size: 2.8em;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                `}</style>
            </div> 
        )
    }
}