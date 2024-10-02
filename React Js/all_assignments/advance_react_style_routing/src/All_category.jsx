import React from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faAngleDown, faFire, faHeadset } from '@fortawesome/free-solid-svg-icons';

const All_category = () => {
  return (
      <>

          <div className="items">
            <div className="all_category">
                <div className="category_items">
                    <button className='category_btn'> <FontAwesomeIcon icon={faTableCellsLarge} /> Browse All Categories  <FontAwesomeIcon icon={faAngleDown} /> </button>
                    
                    <button style={{ paddingLeft: '20px' }}> <FontAwesomeIcon icon={faFire} style={{ color: '#3BB77E' }} /> Deals </button>
                    <button style={{color:'#3BB77E'}}> Home <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button> About </button>
                    <button> Shop <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button> Vendors <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button> Mega Menu <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button> Blog <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button> Pages <FontAwesomeIcon icon={faAngleDown} /> </button>
                    <button style={{paddingRight:'0px'}}> Contact </button>
                </div>
                <div className="support">
                    <div className="support_icon">
                          <FontAwesomeIcon icon={faHeadset} style={{fontSize:'30px'}} />
                    </div>
                    <div className="support_content">
                        <p className='sup_num'> 1900 - 888 </p>
                        <p> 24/7 Support Center </p>
                    </div>
                </div>
            </div>
          </div>
      
      </>
  )
}

export default All_category