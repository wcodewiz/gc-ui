import { Theme } from 'gc-theme';

export class GCThemeLight extends Theme {
    constructor() {
        super(
            'light',
            {
                backgroundColor: 'bg-white',
                color: 'text-gray-800'
            },
            {
                backgroundColor: 'bg-transparent',
                color: 'text-gray-800'
            }
        );
        this.button = {
            backgroundColor: 'bg-green-800',
            color: 'text-black',
            borderColor: 'border-gray-300',
            hoverBackgroundColor: 'hover:bg-green-700',
            hoverColor: 'hover:text-gray-800'
        };

        this.input = {
            backgroundColor: 'bg-gray-100',
            color: 'text-black',
            borderColor: 'border-gray-200'
        };
        this.danger = {
            backgroundColor: 'bg-transparent',
            color: 'text-red-500',
            borderColor: 'border-red-500'
        };
        this.switch = {
            backgroundColor: 'bg-red-500',
            color: 'text-red-500',
            borderColor: 'border-red-500'
        };
    }
}
