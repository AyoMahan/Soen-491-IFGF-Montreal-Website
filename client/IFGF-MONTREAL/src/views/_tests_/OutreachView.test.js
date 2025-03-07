import { mount } from '@vue/test-utils';
import Outreach from '@/views/OutreachView.vue';
import { describe, it, expect } from 'vitest';

describe('Outreach.vue', () => {
  it('renders the Form component', () => {
    const wrapper = mount(Outreach);

    // Check if the Form component is rendered correctly
    expect(wrapper.findComponent({ name: 'Form' }).exists()).toBe(true);
  });
});
