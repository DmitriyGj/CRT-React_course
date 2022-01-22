import {Component} from "react";

export function addLodaing(WrappedComponent){
    return class extends Component{
        constructor(props){
            super(props);
            this.state= {
                loading: true,
            };
            this.toggleLoadingStateHandler = this.toggleLoadingStateHandler.bind(this);
        }

        componentDidMount(){
            this.timeout =setTimeout( this.toggleLoadingStateHandler, 1000 );
        }

        componentWillUnmount(){
            clearTimeout(this.timeout);
        }

        toggleLoadingStateHandler(){
            this.setState(prevState=>({ loading: !prevState.loading}));
        }

        render(){
            return this.state.loading?
                    <p>Loading...</p>:
                    <WrappedComponent {...this.props}/>
        }
    }
}
