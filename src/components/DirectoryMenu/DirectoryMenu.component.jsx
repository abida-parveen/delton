import React from 'react';
import './DirectoryMenu.style.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';

const DirectoryMenu = ({sections}) =>
{
  return(
    <div className='directory-menu'>
      {
        sections.map(({id,...otherSectionProps})=>(
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu)