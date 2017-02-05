import {expect} from 'chai';
import DateHelper from './dataFormat';

describe('Date Helper', () => {
  describe('getFormattedDateTime', () => {
    it('returns mm/dd hh:mm:ss formatted time when passed a date', () => {

      const date = new Date('2016-10-27 05:53:30');

      // assert
      expect(DateHelper.getFormattedDateTime(date)).to.equal('2016/10/27 5:53:30');
    });

    it('pads single digit minute and second values with leading zeros', () => {

      const date = new Date(99, 0, 4, 11, 3, 2, 0);

      // assert
      expect(DateHelper.getFormattedDateTime(date)).to.equal('1999/1/4 11:03:02');
    });
  });
});
