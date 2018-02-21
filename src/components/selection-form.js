import React from 'react';
import SelectStyle from './style-form';
import SelectCountry from './country-form';


const styles = {
    customWidth: {
        width: 150,
    },
    label: {
        marginRight: '10px',
    }
};


class SelectForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: '',
            country: '',
        };
        this.selectStyle = this.selectStyle.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }

    selectStyle(event, index, style) {
        this.setState({
            ...this.state,
            value: style
        })
    }

    selectCountry(event, index, country) {
        this.setState({
            ...this.state,
            value: country
        })
    }


    render(){
        return(
            <div>
                <SelectStyle styles={styles}/>
                <br />
                <SelectCountry styles={styles}/>

            </div>

        )
    }
}

export default SelectForm;

