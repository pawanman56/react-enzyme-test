import React, { FunctionComponent } from 'react';

interface Props {
    counterNumber: number;
}

const CounterLabel: FunctionComponent<Props> = ({ counterNumber }) => {
    return (
        <p>The number of clicks: { counterNumber }</p>
    );
};

export default CounterLabel;
