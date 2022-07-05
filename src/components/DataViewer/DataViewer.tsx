import React, { FunctionComponent } from 'react';
import ReactJson from 'react-json-view';

interface Props {
    data: unknown;
};

const DataViewer: FunctionComponent<Props> = ({ data }) => {
    if (data !== null && typeof data === 'object') return <ReactJson src={data} />;

    return <p>{data.toString()}</p>;
};

export default DataViewer;
