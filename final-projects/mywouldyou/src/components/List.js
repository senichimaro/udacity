import React from 'react'

class List extends React.Component {
    render(){
        const ComponentUsed = this.props.componentUsed
        return this.props.data.map((entry,i) => <ComponentUsed {...this.props.customProps} {...{[this.props.componentPropName]: entry}} key={i}/>)
    }
}

export default List