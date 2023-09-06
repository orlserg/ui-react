import React from 'react';
import { TabList as TabListSource, type TabListProps } from 'react-tabs';

import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps extends Omit<TabListProps, 'className'> {
    readonly className?: string | TStyle
}

export const TabList = ({ className, ...props }: IProps) => {
    const cn = useClassnames(style, className);

    return (
        <TabListSource
            className={cn('tab-list')}
            {...props}
        />
    );
};

TabList.tabsRole = 'TabList';
