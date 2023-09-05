import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconStarNotActive = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            d="M10.4305 2.02267C11.0421 0.61484 12.9579 0.614839 13.5695 2.02267L15.7769 7.10349C16.0277 7.68074 16.5511 8.07762 17.1545 8.14818L22.4664 8.76927C23.9382 8.94136 24.5302 10.843 23.4364 11.8852L19.4888 15.6464C19.0403 16.0737 18.8404 16.7159 18.9626 17.3368L20.0381 22.8014C20.3361 24.3156 18.7862 25.4909 17.4986 24.7272L12.8514 21.9709C12.3235 21.6578 11.6765 21.6578 11.1486 21.9709L6.50144 24.7272C5.21378 25.4909 3.66391 24.3156 3.96191 22.8014L5.03742 17.3368C5.15961 16.7159 4.9597 16.0737 4.5112 15.6464L0.563615 11.8852C-0.530208 10.843 0.0617894 8.94136 1.53363 8.76927L6.84545 8.14818C7.44895 8.07762 7.97231 7.68074 8.2231 7.10349L10.4305 2.02267Z"
            fill="#D1CFD7"
        />
    </SVG>
);

export default IconStarNotActive;
