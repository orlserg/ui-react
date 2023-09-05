import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCameraNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.707 1.293 1.293 2.707 4.586 6H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15.586l1.707 1.707 1.414-1.414-20-20ZM17.586 19l-2.263-2.263a5 5 0 0 1-7.06-7.06L6.586 8H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13.586ZM9.68 11.096a3 3 0 0 0 4.223 4.223l-4.223-4.223ZM20 6a3 3 0 0 1 3 3v9h-2V9a1 1 0 0 0-1-1h-3c-.664 0-1.112-.364-1.56-.987a8.422 8.422 0 0 1-.329-.499 81.052 81.052 0 0 1-.226-.372l-.073-.12C14.36 5.282 14.087 5 14 5h-4c.03 0 .02.01-.047.072l-.07.067c-.07.065-.373.376-.356.359A139.28 139.28 0 0 1 8.097 4.1c-.032.032.305-.314.405-.409.466-.444.905-.69 1.498-.69h4c1.087 0 1.69.621 2.518 1.977l.084.139.002.002.21.345c.1.162.178.283.249.381.047.065.088.117.12.155H20Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCameraNo;
