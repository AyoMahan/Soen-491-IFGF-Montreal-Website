import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('renders the correct headings', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('IFGF Montreal Vision and Mission');
    expect(wrapper.text()).toContain('Our Vision');
    expect(wrapper.text()).toContain('Our Belief');
    expect(wrapper.text()).toContain('Message from our Pastor');
  });

  it('renders vision statement correctly', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('To Perform His will and to finish his works.');
    expect(wrapper.text()).toContain('To observe and practice His teachings and examples.');
    expect(wrapper.text()).toContain('To reach out to unbelievers with the Gospel.');
    expect(wrapper.text()).toContain('To love one another with Godly Love.');
  });

  it('renders the images correctly', () => {
    const wrapper = mount(AboutView);
    const images = wrapper.findAll('img');
    const expectedImages = ['/src/assets/Jesus.jpg', '/src/assets/bible.jpg', '/src/assets/matthew%2018.jpg'];

    images.forEach((img, index) => {
      expect(img.attributes('src')).toBe(expectedImages[index]);
    });
  });

  it('renders the Bible verse correctly', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('For where two or three are gathered together in my name, there am I in the midst of them.');
    expect(wrapper.text()).toContain('Matthew 18:20 (KJV)');
  });
});
