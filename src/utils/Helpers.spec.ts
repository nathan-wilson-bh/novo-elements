// APP
import { Helpers } from './Helpers';

describe('Utils: Helpers', () => {

    xdescribe('Method: swallowEvent(event)', () => {
        it('should be defined.', () => {
            let event = new Event('open');
            expect(Helpers.swallowEvent(event));
        });
    });

    describe('Method: interpolate(str, props)', () => {
        it('should be defined.', () => {
            expect(Helpers.interpolate('', {})).toBeDefined();
        });
    });

    xdescribe('Method: validateInterpolationProps(str, props)', () => {
        it('should be defined.', () => {
            expect(Helpers.validateInterpolationProps('', {})).toBeDefined();
        });
    });

    describe('Method: isString(obj)', () => {
        it('should be defined.', () => {
            expect(Helpers.isString({})).toBeDefined();
        });
    });

    describe('Method: isBlank(obj)', () => {
        it('should be defined.', () => {
            expect(Helpers.isBlank({})).toBeDefined();
        });
    });

    describe('Method: isEmpty(obj)', () => {
        it('should be defined.', () => {
            expect(Helpers.isEmpty({})).toBeDefined();
        });
    });

    describe('Method: isFunction(obj)', () => {
        it('should be defined.', () => {
            expect(Helpers.isFunction({})).toBeDefined();
        });
    });

    describe('Method: isDate(obj)', () => {
        it('should be defined.', () => {
            expect(Helpers.isDate(1)).toBeDefined();
        });
    });

    describe('Method: sortByField(fields, reverse)', () => {
        it('should be defined.', () => {
            expect(Helpers.sortByField(1, false)).toBeDefined();
        });
    });

    describe('Method: filterByField(key, value)', () => {
        it('should be defined.', () => {
            expect(Helpers.filterByField(1, 1)).toBeDefined();
        });
    });

    xdescribe('Method: calcPositionOffset(position, element, side)', () => {
        it('should be defined.', () => {
            let element = new Element();
            expect(Helpers.calcPositionOffset({ bottom: 1, height: 1, left: 1, right: 1, top: 1, width: 1 }, element, 'right')).toBeDefined();
        });
    });

    xdescribe('Method: findAncestor(element, selector)', () => {
        it('should be defined.', () => {
            let element = new Element();
            expect(Helpers.findAncestor(element, '1')).toBeDefined();
        });
    });
});
