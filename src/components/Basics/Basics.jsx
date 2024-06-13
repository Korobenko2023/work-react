import { Component } from "react"

export class Basics extends Component {
    state = {
        a: 0,
        b: 0,
    }

    updateA = () => 
        this.setState((prevState) => ({ a: prevState.a + 1 }))

    updateB = () => 
        this.setState((prevState) => ({ b: prevState.b + 1}))
    
    render() {
        const {a, b} = this.state
        const total = a + b
        return (
            <div>
                {total > 0 && (
                    <>
                        <p>A = {a}</p>
                        <p>B = {b}</p>              
                        <p>Total = {total}</p>                        
                    </>
                )}
                
                <Button value={a} onUpdate={this.updateA} />
                <Button value={b} onUpdate={this.updateB} />
        </div>
        )
    }
}
    

export const Button = ({value, onUpdate}) => {
    
        return (
            <button onClick={onUpdate}>Clicks: {value} </button>
        )
   
}
    