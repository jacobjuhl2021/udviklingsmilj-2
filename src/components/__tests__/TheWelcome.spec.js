// TheWelcome.spec.js
import { mount } from '@vue/test-utils';
import TheWelcome from '../TheWelcome.vue';
import { describe, test, expect } from 'vitest';

describe('TheWelcome.vue', () => {
  test('renders without crashing', () => {
    const wrapper = mount(TheWelcome);
    expect(wrapper.exists()).toBe(true);
  });

  test('contains "Documentation" heading', () => {
    const wrapper = mount(TheWelcome);
    expect(wrapper.text()).toContain('Documentation');
  });
});
