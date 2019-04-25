import React from "react";
import Select from "react-select";

class AutoComplete extends React.Component {
  state = {
    selectedOption: null,
    options: [
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
      { value: "Assam", label: "Assam" },
      { value: "Bihar", label: "Bihar" },
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Chhattisgarh", label: "Chhattisgarh" },
      { value: "Chandigarh", label: "Chandigarh" },
      { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
      { value: "Daman and Diu", label: "Daman and Diu" },
      { value: "Delhi", label: "Delhi" },
      { value: "Goa", label: "Goa" },
      { value: "Gujarat", label: "Gujarat" },
      { value: "Haryana", label: "Haryana" },
      { value: "Himachal Pradesh", label: "Himachal Pradesh" },
      { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
      { value: "Jharkhand", label: "Jharkhand" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Kerala", label: "Kerala" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Manipur", label: "Manipur" },
      { value: "Meghalaya", label: "Meghalaya" },
      { value: "Mizoram", label: "Mizoram" },
      { value: "Nagaland", label: "Nagaland" },
      { value: "Orissa", label: "Orissa" },
      { value: "Punjab", label: "Punjab" },
      { value: "Pondicherry", label: "Pondicherry" },
      { value: "Rajasthan", label: "Rajasthan" },
      { value: "Sikkim", label: "Sikkim" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Tripura", label: "Tripura" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Uttarakhand", label: "Uttarakhand" },
      { value: "West Bengal", label: "West Bengal" }
    ]
  };

  handleChange = selectedOption => {
    //console.log(selectedOption);
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
      />
    );
  }
}

export default AutoComplete;
