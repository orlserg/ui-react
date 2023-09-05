import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconWarningOrange = (props: IProps) => (
    <SVG {...props.svg}>
        <circle
            cx="12"
            cy="12"
            r="11"
            fill="#FF773C"
        />
        <path
            d="M13.2186 5V10.4662C13.2186 11.046 13.188 11.6193 13.1266 12.1863C13.0714 12.7534 12.9916 13.3427 12.8873 13.9543H11.1757C11.0714 13.3427 10.9886 12.7534 10.9272 12.1863C10.872 11.6193 10.8444 11.046 10.8444 10.4662V5H13.2186ZM10.5039 17.4805C10.5039 17.2703 10.5407 17.0728 10.6143 16.8881C10.6941 16.6969 10.8015 16.5345 10.9364 16.4007C11.0714 16.2605 11.2278 16.1522 11.4057 16.0758C11.5898 15.9929 11.7892 15.9515 12.0039 15.9515C12.2125 15.9515 12.4057 15.9929 12.5837 16.0758C12.7677 16.1522 12.9272 16.2605 13.0622 16.4007C13.1972 16.5345 13.3045 16.6969 13.3843 16.8881C13.464 17.0728 13.5039 17.2703 13.5039 17.4805C13.5039 17.6972 13.464 17.8978 13.3843 18.0826C13.3045 18.2674 13.1972 18.4298 13.0622 18.57C12.9272 18.7038 12.7677 18.8089 12.5837 18.8853C12.4057 18.9618 12.2125 19 12.0039 19C11.7892 19 11.5898 18.9618 11.4057 18.8853C11.2278 18.8089 11.0714 18.7038 10.9364 18.57C10.8015 18.4298 10.6941 18.2674 10.6143 18.0826C10.5407 17.8978 10.5039 17.6972 10.5039 17.4805Z"
            fill="white"
        />
    </SVG>
);

export default IconWarningOrange;
