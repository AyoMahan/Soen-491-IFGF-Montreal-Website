import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Cards from '@/components/Cards.vue';

describe('Cards.vue', () => {
  it('renders the correct number of cards', () => {
    const wrapper = mount(Cards);
    const cards = wrapper.findAll('.card');
    expect(cards.length).toBe(4);
  });

  it('renders card titles and descriptions correctly', () => {
    const wrapper = mount(Cards);
    const cardData = [
      { title: "Sunday School", description: "Engaging lessons for kids & youth." },
      { title: "Adults iCare", description: "A space for adults to grow in faith." },
      { title: "Teens Ministry", description: "Guiding teens in faith and fellowship." },
      { title: "Prayer Warriors", description: "Strengthening faith through prayer." }
    ];

    cardData.forEach((card, index) => {
      const cardElement = wrapper.findAll('.card')[index];
      expect(cardElement.text()).toContain(card.title);
      expect(cardElement.text()).toContain(card.description);
    });
  });

  it('renders images correctly', () => {
    const wrapper = mount(Cards);
    const images = wrapper.findAll('img');
    const expectedImages = [
      '/assets/sunday-school.jpg',
      '/assets/adults-icare.jpg',
      '/assets/teens-ministry.jpg',
      '/assets/prayer-ministry.jpg'
    ];

    images.forEach((img, index) => {
      expect(img.attributes('src')).toBe(expectedImages[index]);
    });
  });
});
