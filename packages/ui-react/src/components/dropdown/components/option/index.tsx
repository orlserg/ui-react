import React, { ReactNode, MouseEvent } from 'react';

import { TStyle, useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Задает дополнительные CSS классы для стилизации компонента
     **/
    readonly className?: string | TStyle,
    /**
     * Содержимое опции
     **/
    readonly children: ReactNode,
    /**
     * Активное состояние
     **/
    readonly isActive?: boolean,
    /**
     * События клика
     **/
    readonly onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const DropdownOption = (props: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <div
            className={cn('dropdown-option', {
                'dropdown-option_active': props.isActive
            })}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};
