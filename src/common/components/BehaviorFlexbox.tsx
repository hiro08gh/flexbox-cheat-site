import React, { ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';
import { ExampleItem } from './ExampleItem';

export type Props = {
    parentStyle: FlattenSimpleInterpolation;
    childStyle?: FlattenSimpleInterpolation;
    propertyValue: string;
    onClickBoxHandler: () => void;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const { parentStyle, childStyle, propertyValue, onClickBoxHandler } = props;
    return (
        <BehaviorBoxWrapper>
            <BehaviorBox onClick={onClickBoxHandler}>
                <ExampleItems parentStyle={parentStyle}>
                    <ExampleItem overrideItemStyle={childStyle} numberText="1" />
                    <ExampleItem overrideItemStyle={childStyle} numberText="2" />
                    <ExampleItem overrideItemStyle={childStyle} numberText="3" />
                    <ExampleItem overrideItemStyle={childStyle} numberText="4" />
                </ExampleItems>
            </BehaviorBox>
            <PropertyValue>{propertyValue}</PropertyValue>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`mx-3 mt-3 mb-5`}
`;

const BehaviorBox = styled.div`
    ${tw`inline-block h-24 w-32 border border-solid border-gray-400 hover:border-blue-500 cursor-pointer p-2`}
`;

const ExampleItems = styled.div<{ parentStyle: FlattenSimpleInterpolation }>`
    ${tw`border border-dashed border-blue-500`}
    ${(props): FlattenSimpleInterpolation => props.parentStyle}
`;

const PropertyValue = styled.p`
    ${tw`text-lg text-center text-gray-500 mt-2 mb-3`}
`;
