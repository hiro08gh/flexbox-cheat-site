import React, { ReactElement, useState, useCallback } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForChild } from '../../common/util/CreateCssCode';

const childStyleContents = `width: 30%;`;

const childStyleCode = createCssCodeForChild(childStyleContents);

const childStyle = css`
    ${childStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/align-content';

export const AlignContentContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const [isMouseEnter, setMouseEnter] = useState(false);

    const parentStyleContents = `display: flex;
    flex-wrap: wrap;
    align-content: ${propertyValue};
    height: 100%;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [parentStyleCode, setFlexboxItemsStyle, setOpened, setReference]);

    const parentStyle = css`
        ${parentStyleContents}
    `;

    return (
        <BehaviorFlexbox
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            childStyle={childStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
