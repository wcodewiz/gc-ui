import { ReactNode, useState } from 'react';
import { FunctionComponent } from 'react';
import { Container, FlexColumn, FlexRow } from '../primary';
import { VariantProps, cva } from 'class-variance-authority';
import { cn, getFontSize, getRadius, getWeights, staticSpace } from '../../utils/utils';
import { useOnce } from '../../hooks/useOnce';

const StepsVariant = cva('absolute top-0 -left-1 cursor-pointer  font-sans font-bold whitespace-nowrap flex justify-center', {
    variants: {
        radius: getRadius,
        spacing: staticSpace,
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono'
        },

        weight: getWeights,
        fontSize: getFontSize,
        defaultVariant: {
            family: 'sans',
            elevation: 'default',
            weight: 'normal',
            fontSize: 'small',
            spaces: 'xsmall',
            width: 'default'
        }
    }
});

interface StepsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, VariantProps<typeof StepsVariant> {
    stepsItem: ReactNode[] | string[];
    stepContent: ReactNode[];
    current: number;
    axis?: 'horizontal' | 'vertical';
    change?: (index: number) => void;
    activeClassName?: string;
}

const Steps: FunctionComponent<StepsProps> = ({ axis = 'horizontal', ...prop }) => {
    const { radius, className, weight, spacing, fontSize, defaultVariant } = prop;
    const classList = cn(StepsVariant({ radius, weight, spacing, fontSize, defaultVariant }));
    const [current, setCurrent] = useState(prop.current);
    const active = prop.activeClassName ?? '';

    useOnce(() => {
        if (prop.stepContent.length !== prop.stepsItem.length) {
            throw new Error('items and steps must have the same length');
        }
    });

    return axis === 'horizontal' ? (
        <FlexColumn className="relative">
            <FlexRow axis={'start'} className="items-center">
                {prop.stepsItem.map((e, i) => {
                    return (
                        <span key={i} className="relative w-full step-container flex items-center justify-between cursor-pointer">
                            {i < prop.stepsItem.length - 1 && <span className="w-full relative bg-gray-800 border-2 mx-0 my-0"></span>}
                            <span
                                onClick={(e) => {
                                    setCurrent(i);
                                    prop.change && prop.change(i);
                                }}
                                className={`${classList} ${i === current ? active : className}`}
                            >
                                {i === prop.stepsItem.length - 1 ? 'Finish' : e}
                            </span>
                        </span>
                    );
                })}
            </FlexRow>
            <Container>
                {prop.stepContent.map((e, i) => {
                    if (i !== current) return <></>;
                    return (
                        <div key={i} className={`relative w-full`}>
                            {e}
                        </div>
                    );
                })}
            </Container>
        </FlexColumn>
    ) : (
        <FlexRow className="relative">
            <FlexColumn axis={'start'} className="items-center w-3/12">
                {prop.stepsItem.map((e, i) => {
                    return (
                        <span key={i} className="relative h-full w-full left-1 step-container flex flex-col items-center cursor-pointer">
                            {i < prop.stepsItem.length - 1 && <span className="h-full absolute left-7 top-5 bg-gray-800 border-2 mx-0 my-0"></span>}
                            <span
                                onClick={(e) => {
                                    setCurrent(i);
                                    prop.change && prop.change(i);
                                }}
                                className={`${classList}  ${i === current ? active : className}`}
                            >
                                {i === prop.stepsItem.length - 1 ? 'Finish' : e}
                            </span>
                        </span>
                    );
                })}
            </FlexColumn>
            <Container>
                {prop.stepContent.map((e, i) => {
                    if (i !== current) return <></>;
                    return (
                        <div key={i} className={`relative w-full`}>
                            {e}
                        </div>
                    );
                })}
            </Container>
        </FlexRow>
    );
};

export default Steps;
