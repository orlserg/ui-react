import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleArrowBottomLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-5v-2h-3.586l5.293-5.293-1.414-1.414L10 12.586V9H8v7h7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleArrowBottomLeft;
