import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorBrushL = (props: IProps) => (
    <SVG {...props.svg}>
        <circle
            cx="12"
            cy="12"
            r="6"
        />
    </SVG>
);

export default IconEditorBrushL;
