import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




class SelectCounty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country: '',
        };
        this.selectCountry = this.selectCountry.bind(this);
    }


    selectCountry(event, index, country) {
        this.setState({
            ...this.state,
            value: country
        })
    }


    render(){

        const { styles } = this.props;
        return(

            <SelectField
                floatingLabelText="Country"
                value={this.state.value}
                onChange={this.selectCountry}
                style={styles.customWidth}
                floatingLabelStyle={styles.label}
            >
                <MenuItem value={1} primaryText="USA" />
                <MenuItem value={2} primaryText="Germany" />
                <MenuItem value={3} primaryText="Belgium" />
                <MenuItem value={4} primaryText="Netherlands" />
                <MenuItem value={5} primaryText="Other" />
            </SelectField>

        )
    }
}

export default SelectCounty;
