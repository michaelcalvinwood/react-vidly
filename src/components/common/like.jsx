import React from 'react'

const Like = ({ liked, onClick }) => {
    let classes = "fa fa-heart";
    classes += liked ? '' : '-o';
    
    return(
            <i 
                onClick={onClick} 
                className={classes} 
                aria-hidden="true" 
                style={ {cursor: 'pointer'} }>    
            </i>
        );
    
}
 
export default Like;