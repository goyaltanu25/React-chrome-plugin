import React from 'react'
import ReactDom from 'react-dom'

import './NewProfilePortal.css';

const NewProfilePortalModal= (props) =>{
   return ReactDom.createPortal(
      <div
        style={{
          top: '12rem',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a4508b',
          backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',
          height: '250px',
          marginTop:'4rem'
        }}
        onClick={props.onClose}
      >
        <div
          style={{
            zIndex:'2',
            padding: 20,
            background: '#fff',
            borderRadius: '1rem',
            margin: '5rem',
            position: 'relative',
            minWidth: '400px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          }}
        >
          {props.children}
        
        </div>
      </div>,
      document.getElementById('portal-root'),
    )

}

export default NewProfilePortalModal;