import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
    it('renders form inputs correctly', () => {
      const wrapper = mount(Form);
      expect(wrapper.find('#inputName').exists()).toBe(true);
      expect(wrapper.find('#inputEmail').exists()).toBe(true);
      expect(wrapper.find('#inputAddress').exists()).toBe(true);
    });
  
    it('submits form data correctly', async () => {
      const wrapper = mount(Form);
      await wrapper.find('#inputName').setValue('John Doe');
      await wrapper.find('#inputEmail').setValue('johndoe@example.com');
      await wrapper.find('#message').setValue('Hello! I am interested in learning more.');
      await wrapper.find('form').trigger('submit.prevent');
      expect(wrapper.vm.formData.name).toBe('John Doe');
      expect(wrapper.vm.formData.email).toBe('johndoe@example.com');
    });
  });