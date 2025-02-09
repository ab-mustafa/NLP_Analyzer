
import {  clear_results } from './formHandler';

describe('clear_results function', () => {
  test('should remove all child elements from the result_form', () => {
    let resultForm = document.createElement('div');
    resultForm.innerHTML = `
      <p>Result 1</p>
      <p>Result 2</p>`;
    expect(resultForm.children.length).toBe(2);
    clear_results(resultForm);
    expect(resultForm.children.length).toBe(0);
  });
});
