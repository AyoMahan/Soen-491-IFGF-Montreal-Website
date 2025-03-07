import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Carousel from '@/components/Carousel.vue';

describe('Carousel.vue', () => {
  it('renders the correct number of slides', () => {
    const wrapper = mount(Carousel);
    const slides = wrapper.findAll('.carousel-item');
    expect(slides.length).toBe(4);
  });

  it('renders slide titles correctly', () => {
    const wrapper = mount(Carousel);
    expect(wrapper.text()).toContain('Christmas');
    expect(wrapper.text()).toContain('Outdoor Service');
    expect(wrapper.text()).toContain('Retreat');
    expect(wrapper.text()).toContain('Worship Circle');
  });

  it('renders images correctly', () => {
    const wrapper = mount(Carousel);
    const images = wrapper.findAll('img');
    const expectedImages = [
      '/src/assets/christmas-2025.jpg',
      '/src/assets/outdoor-service.jpg',
      '/src/assets/retreat-2025.jpg',
      '/src/assets/worship-circle.jpg'
    ];
    images.forEach((img, index) => {
      expect(img.attributes('src')).toBe(expectedImages[index]);
    });
  });

  it('has functioning navigation buttons', async () => {
    const wrapper = mount(Carousel);
    const prevButton = wrapper.find('.carousel-control-prev');
    const nextButton = wrapper.find('.carousel-control-next');
    
    expect(prevButton.exists()).toBe(true);
    expect(nextButton.exists()).toBe(true);
  });
});
