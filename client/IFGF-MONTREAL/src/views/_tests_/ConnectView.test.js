import { mount } from '@vue/test-utils';
import ConnectView from '@/views/ConnectView.vue';
import { describe, it, expect } from 'vitest';

describe('ConnectView.vue', () => {
  it('renders the component properly', () => {
    const wrapper = mount(ConnectView);

    // Check if the title is rendered
    expect(wrapper.find('.title').text()).toBe('Connect With Us');

    // Check if the subtitle for Care Groups is rendered
    expect(wrapper.find('.subtitle').text()).toBe('Care Groups');

    // Check if the care group description is rendered
    const description = wrapper.findAll('.description');
    expect(description).toHaveLength(3); // Ensure there are 3 descriptions
    expect(description.at(0).text()).toContain('Care groups are gatherings');
    expect(description.at(1).text()).toContain('The primary purpose of a care group');
    expect(description.at(2).text()).toContain('Care groups may meet in various settings');
  });

  it('renders the Cards component', () => {
    const wrapper = mount(ConnectView);

    // Check if the Cards component is rendered
    expect(wrapper.findComponent({ name: 'Cards' }).exists()).toBe(true);
  });
});
