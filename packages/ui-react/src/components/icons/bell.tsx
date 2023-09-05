import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconBell = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M19 10c0-4.06-2.238-6.877-5.135-7.722a2 2 0 0 0-3.73-.002C7.235 3.118 5 5.929 5 10c0 2.634-.531 4.11-1.514 5.18-.164.178-.61.588-.911.865-.143.132-.254.233-.287.267L2 16.604v3.41h6.088c.206 1.062.782 1.773 1.824 2.409a4.008 4.008 0 0 0 4.176 0 3.941 3.941 0 0 0 1.786-2.409H22v-3.41l-.288-.292c-.03-.03-.136-.129-.275-.257-.3-.277-.755-.696-.922-.878C19.532 14.102 19 12.625 19 10Zm-5.263 10.014h-3.558c.14.263.382.461.775.701.642.392 1.45.392 2.092 0 .297-.181.53-.421.69-.7Zm5.303-3.487c.21.23.662.65.96.925v.562H4v-.562c.296-.27.748-.69.958-.92C6.294 15.08 7 13.119 7 10c0-3.78 2.333-5.988 5-5.988 2.66 0 5 2.22 5 5.988 0 3.108.706 5.07 2.04 6.527Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBell;
