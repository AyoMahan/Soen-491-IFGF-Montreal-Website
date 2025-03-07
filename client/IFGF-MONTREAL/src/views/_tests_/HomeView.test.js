import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { describe, it, expect } from 'vitest';

describe('HomeView.vue', () => {
  it('renders the component properly', () => {
    const wrapper = mount(HomeView);

    // Check if the Cover component is rendered
    expect(wrapper.findComponent({ name: 'Cover' }).exists()).toBe(true);

    // Check if the title "Come worship With Us" is rendered
    const title = wrapper.find('h1.display-4');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Come worship With Us');
  });
});
