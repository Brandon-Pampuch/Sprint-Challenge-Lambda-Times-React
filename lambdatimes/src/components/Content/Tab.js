import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div>
 
      <button className={''} onClick={() =>{props.selectTabHandler(props.tab)}}>{props.tab.toUpperCase()}</button>
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
  
 };

export default Tab;
