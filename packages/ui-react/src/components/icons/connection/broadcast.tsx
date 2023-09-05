import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconConnectionBroadcast = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m4.408 4.04 1.478 1.355A8.976 8.976 0 0 0 3 12c0 2.61 1.111 4.96 2.886 6.604L4.408 19.96A10.969 10.969 0 0 1 1 12C1 8.87 2.308 6.044 4.408 4.04ZM9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.852 8.114 7.367 6.752A6.983 6.983 0 0 0 5 12c0 2.089.915 3.964 2.367 5.247l1.485-1.362A4.99 4.99 0 0 1 7 12a4.99 4.99 0 0 1 1.852-3.886Zm10.74-4.074A10.969 10.969 0 0 1 23 12c0 3.131-1.308 5.956-3.408 7.96l-1.478-1.355A8.976 8.976 0 0 0 21 12c0-2.61-1.111-4.96-2.886-6.604l1.478-1.356ZM19 12c0-2.09-.915-3.965-2.367-5.247l-1.485 1.362A4.99 4.99 0 0 1 17 12a4.99 4.99 0 0 1-1.852 3.885l1.485 1.362A6.983 6.983 0 0 0 19 12Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionBroadcast;
