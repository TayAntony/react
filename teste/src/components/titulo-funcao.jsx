import React, { Component, useState } from 'react';

// 1 function = function component
function TituloF(props) {
    return ( 
        <h1>{props.mensagem}</h1>
    );
}

export default TituloF;