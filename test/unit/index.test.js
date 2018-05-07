import { expect } from 'chai';

import {
  wrapIdentifier,
  postProcessResponse
} from '../../src';

describe('kenx:Plugin - Case converter plugin:', () => {
  const defaultWrapper = (val)=> String(val);

  describe('Field names -> column names', () => {
    it('should not transpose *', () => {
      expect(wrapIdentifier('*', defaultWrapper)).to.equal('*');
    });

    it('should transpose simple camelcase to snake case', () => {
      expect(wrapIdentifier('testResult', defaultWrapper)).to.equal('test_result');
    });

    it('should not separate out numbers with underscore', () => {
      expect(wrapIdentifier('testResult1', defaultWrapper)).to.equal(
        'test_result1'
      );
      expect(wrapIdentifier('test2Result1', defaultWrapper)).to.equal(
        'test2_result1'
      );
    });
  });

  describe('Column names -> field names', () => {
    it('should return empty if no values are returned', ()=>{
        expect(postProcessResponse(undefined)).to.be.an('undefined');
    });
    it('transpose simple object keys snake case to camelcase', () => {
      expect(postProcessResponse({ test_key: 1 })).to.deep.equal({ testKey: 1 });
    });

    it('should transpose keys with numbers', () => {
      expect(postProcessResponse({ test_key1: 1 })).to.deep.equal({ testKey1: 1 });
    });

    it('transpose keys with numbers - bad use case', () => {
      expect(postProcessResponse({ test_key_1: 1 })).to.deep.equal({ testKey1: 1 });
    });

    it('transpose keys for all object in an array', () => {
      expect(
        postProcessResponse([{ test_key_1: 1 }, { test_key_2: 2 }])
      ).to.deep.equal([{ testKey1: 1 }, { testKey2: 2 }]);
    });
  });
});
