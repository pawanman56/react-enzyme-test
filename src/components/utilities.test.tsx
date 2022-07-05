import { sum } from './utilities';

jest.mock('./utilities', () => ({
    ...jest.requireActual('./utilities'),
    sum: jest.fn()
}));

describe('Utilities test', () => {
    describe('When sum is called', () => {
        beforeEach(() => {
            (sum as jest.Mock).mockResolvedValue(3);
        });

        it('should return valid number', async () => {});
    });
});
