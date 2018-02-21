import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class SelectStyle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: '',

        };
        this.selectStyle = this.selectStyle.bind(this);

    }

    selectStyle(event, index, style) {
        this.setState({
            ...this.state,
            value: style
        })
    }

    render () {
        const { styles } = this.props;
        return (
            <SelectField
                floatingLabelText="Style"
                value={this.state.value}
                onChange={this.selectStyle}
                style={styles.customWidth}
            >
                <MenuItem value={1} primaryText="Ale" />
                <MenuItem value={2} primaryText="Lager" />
                <MenuItem value={3} primaryText="Pilsner" />
                <MenuItem value={4} primaryText="Stout" />
                <MenuItem value={5} primaryText="IPA" />
            </SelectField>
        )
    }
}

export default SelectStyle;