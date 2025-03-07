import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue', () => {
  it('renders the correct location and schedule', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('Find us');
    expect(wrapper.text()).toContain('Saturdays: 11am - 1:30 pm');
    expect(wrapper.text()).toContain('3482 Decarie Blvd, Montreal, Quebec H4A 3J5');
  });

  it('renders social media links', () => {
    const wrapper = mount(Footer);
    const facebookLink = wrapper.find('a[href="https://www.facebook.com/ifgf.montreal"]');
    const instagramLink = wrapper.find('a[href="https://www.instagram.com/ifgfmontreal/"]');
    
    expect(facebookLink.exists()).toBe(true);
    expect(instagramLink.exists()).toBe(true);
  });

  it('renders contact information', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('Contact');
    expect(wrapper.text()).toContain('Email: ifgf.montreal@yahoo.com');
    expect(wrapper.text()).toContain('Phone: +1 514-621-3422');
  });
});
