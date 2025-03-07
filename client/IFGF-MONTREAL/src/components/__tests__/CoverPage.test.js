import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CoverPage from '@/components/CoverPage.vue';

describe('CoverPage.vue', () => {
  it('renders the correct title and subtitle', () => {
    const wrapper = mount(CoverPage);
    expect(wrapper.text()).toContain('Cover your page.');
    expect(wrapper.text()).toContain('Come Worship with Us!');
  });

  it('renders navigation links correctly', () => {
    const wrapper = mount(CoverPage);
    const links = wrapper.findAll('.nav-link');
    expect(links.length).toBe(3);
    expect(links[0].text()).toBe('Home');
    expect(links[1].text()).toBe('Features');
    expect(links[2].text()).toBe('Contact');
  });

  it('renders the cover image', () => {
    const wrapper = mount(CoverPage);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('/src/assets/cross.jpg');
  });

  it('renders the Learn More button', () => {
    const wrapper = mount(CoverPage);
    const button = wrapper.find('a.btn-light');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Learn more');
  });

  it('renders the footer text', () => {
    const wrapper = mount(CoverPage);
    expect(wrapper.text()).toContain('Cover template for Bootstrap, by @mdo.');
  });
});
