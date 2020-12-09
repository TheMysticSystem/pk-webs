import React from 'react';

import System from './System.js'
import Memberlist from './Memberlist.js'

export default function Dash(props) {

    return (<>
            <System user submit={props.submit} setSubmit={props.setSubmit}/>
            <Memberlist />
            </>
    );
}