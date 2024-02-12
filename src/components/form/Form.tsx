import { VariantProps, cva } from 'class-variance-authority';
import { FormHTMLAttributes, FunctionComponent, forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';
import React from 'react';
import { OmitData, cn, hashes } from '../../utils/utils';
import { GInputs, GValidate } from 'gc-form';

const FormVariants = cva(`px-4 py-2 w-full h-full shadow hover:shadow-md`, {
    variants: {
        variant: {
            default: ``,
            outlined: `border :border-color`
        },
        align: {
            center: `bg-yellow-200`,
            justify: `bg-yellow-200`,
            full: `bg-yellow-200`
        },
        defaultVariant: {
            variant: `default`,
            align: `full`
        }
    }
});

interface FormProps extends FormHTMLAttributes<HTMLFormElement>, VariantProps<typeof FormVariants> {
    validator?: GInputs[];
    submit?: (form: FormData) => void;
    onError?: (error: {}) => void;
}

const Form: FunctionComponent<FormProps> = forwardRef<HTMLFormElement, FormProps>(({ ...props }, ref) => {
    const { className, align, defaultVariant, variant } = props;
    const [theme] = useTheme();
    //@ts-ignore
    const cnv = cn(FormVariants({ className, align, defaultVariant, variant: variant?.replaceAll(':border-color', theme.form?.color ?? 'default') }));
    const name = `gc-form-${hashes()}`;
    return (
        <form
            {...OmitData(props, ['align', 'defaultVariant', 'variant'])}
            name={`${name}`}
            onSubmit={(ev) => {
                ev.preventDefault();
                const validate = GValidate(name, props.validator ?? []);
                if (validate.valid) {
                    try {
                        props.submit && props.submit(new FormData(ev.target as HTMLFormElement));
                    } catch (e) {
                        props.onError && props.onError({ error: `${e}` });
                    }
                } else {
                    props.onError && props.onError(validate.errors);
                }
            }}
            ref={ref}
            className={`${theme.form?.backgroundColor ?? ''} ${theme.form?.color ?? ''} ${cnv}`}
        />
    );
});

export { Form, FormVariants };
