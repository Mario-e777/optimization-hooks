import { FILTER_TYPES } from './../../selector/constants';
export const BUTTONS_CLASSES = ['tab-button', 'number-button'];
export const BUTTONS = [
    {
        text: 'All',
        value: FILTER_TYPES[0],
        className: BUTTONS_CLASSES[0]
    },
    {
        text: 'Active',
        value: FILTER_TYPES[1],
        className: BUTTONS_CLASSES[0]
    },
    {
        text: 'Completed',
        value: FILTER_TYPES[2],
        className: BUTTONS_CLASSES[0]
    },
    {
        text: 'New number',
        className: BUTTONS_CLASSES[1]
    },
];
