import {  isValidURL } from './utils';


describe('Is valid URL', () => {
  test('should be false with empty value', () => {
    expect(isValidURL("")).toBe(false); 
  });

  test('should be false with Invalid value value', () => {
    expect(isValidURL("dacavavpiohj9876554677890-9-089765")).toBe(false); 
  });

  test('should be true with valid url', () => {
    expect(isValidURL("https://www.cnn.com/2023/09/05/health/heat-anger-wellness/index.html")).toBe(true); 
  });

});
