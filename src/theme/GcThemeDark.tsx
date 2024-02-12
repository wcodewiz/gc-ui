import { Theme } from 'gc-theme';

export class GCThemeDark extends Theme {
    constructor() {
        super(
            'dark',
            {
                backgroundColor: 'bg-black',
                color: 'text-white'
            },
            {
                backgroundColor: 'bg-transparent',
                color: 'text-white'
            }
        );

        this.button = {
            backgroundColor: 'bg-green-800',
            color: 'text-white',
            borderColor: 'border-white',
            hoverBackgroundColor: 'hover:bg-white',
            hoverColor: 'hover:text-green-800'
        };

        this.dialogBackdrop = {
            backgroundColor: 'bg-gray-800',
            color: 'text-white',
            borderColor: 'border-white'
        };
        this.input = {
            backgroundColor: 'bg-gray-800',
            color: 'text-white',
            borderColor: 'border-white'
        };
        this.danger = {
            backgroundColor: 'bg-transparent',
            color: 'text-red-500',
            borderColor: 'border-red-500'
        };
        this.switch = {
            backgroundColor: 'bg-sky-500',
            color: 'text-red-500',
            borderColor: 'border-red-500'
        };
    }
}
