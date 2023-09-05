import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconBellAdd = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13.865 2.277C16.762 3.123 19 5.94 19 9.997c0 2.623.532 4.1 1.515 5.174.167.182.621.6.922.878.139.128.245.226.275.256l.288.292v3.409h-6.126a3.94 3.94 0 0 1-1.786 2.407 4.01 4.01 0 0 1-4.176 0c-1.042-.635-1.618-1.345-1.824-2.407H2v-3.409l.288-.292c.033-.033.144-.135.287-.266.301-.277.747-.687.911-.866C4.469 14.104 5 12.63 5 9.996c0-4.069 2.235-6.879 5.135-7.72a2 2 0 0 1 3.73.002ZM10.18 20.006h3.558c-.161.28-.394.52-.691.701a2.009 2.009 0 0 1-2.092 0c-.393-.24-.634-.438-.775-.701ZM20 17.445c-.298-.274-.75-.694-.96-.924C17.706 15.064 17 13.103 17 9.996c0-3.767-2.34-5.985-5-5.985-2.667 0-5 2.207-5 5.985 0 3.117-.706 5.077-2.042 6.53-.21.229-.662.648-.958.92v.56h16v-.561Zm-9-9.448v3H8v1.998h3v3h2v-3h3v-1.999h-3V7.997h-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBellAdd;
