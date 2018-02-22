import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';


class AllStocks extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    componentWillMount(){
        this.props.fetchAllSymbols()
    }


    render () {
        const { symbols } = this.props.symbols;

        return (
                <div>
                    {symbols && symbols.length > 1 ? this.props.symbols.symbols.map((symbol, i) => {
                        if(i < 30){
                            return <div>{symbol.symbol}</div>
                        }
                    }) : 'nothing to render'}
                </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        symbols: state.symbols
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllSymbols: () => {
            dispatch(actions.fetchAllSymbols())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStocks)