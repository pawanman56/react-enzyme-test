import DataViewer from './DataViewer';
import { render } from '@testing-library/react';

jest.mock('react-json-view', () => ({
    __esModule: true,
    default: () => <div data-testid="react-json-view" />
}));

describe('The DataViewer component', () => {
    describe('when provided with a dictionary', () => {
        it('should render a ReactJson component', async () => {
            const dataViewer = render(<DataViewer data={{ key: 'value' }} />);

            await dataViewer.findByTestId('react-json-view');
        });
    });

    describe('when provided with a string', () => {
        it('should render a paragraph with the provided string',async () => {
            const text = 'value';
            const dataViewer = render(<DataViewer data={text} />);

            await dataViewer.findByText(text, { selector: 'p' });
        });
    });
});
