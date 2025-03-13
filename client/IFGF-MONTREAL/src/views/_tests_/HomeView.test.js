import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { describe, it, expect } from 'vitest';

describe('HomeView.vue', () => {
  it('renders the component properly', () => {
    const wrapper = mount(HomeView);

    // Check if the Cover component is rendered
    expect(wrapper.findComponent({ name: 'Cover' }).exists()).toBe(true);

    // Check if the title "Come worship With Us" is rendered
    const title = wrapper.find('h1.title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Come Worship With Us');

    // Check if the Bible verse is rendered
    const bibleVerse = wrapper.find('.bible-verse');
    expect(bibleVerse.exists()).toBe(true);
    expect(bibleVerse.text()).toContain('Matthew 25:23');

    // Check if the "We are a community of believers..." text is rendered
    const leadText = wrapper.find('.lead');
    expect(leadText.exists()).toBe(true);
    expect(leadText.text()).toBe('In Christ Alone');

    // Check if the image is rendered correctly
    const image = wrapper.find('img.hero-image');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toBe('/src/assets/pray.jpg'); // Check if correct image is used

    // Check if "Our Story" section is present
    const ourStoryTitle = wrapper.find('.section-title');
    expect(ourStoryTitle.exists()).toBe(true);
    expect(ourStoryTitle.text()).toBe('Our Story');

    // Check if some text from the story section is rendered
    const storyText = wrapper.find('.story-text');
    expect(storyText.exists()).toBe(true);
    expect(storyText.text()).toContain('IFGF MONTREAL was established in 2006');
  });
});
