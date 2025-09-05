'use client';

import React from 'react';
import ContactForm from './contact-form';
import { useContactForm } from '@/hooks/use-contact-form';
import { type ContactFormData } from '@/lib/validations/contact';

// Example 1: Using the form directly in a page (without dialog)
export function ContactPageExample() {
  const { isSubmitting, submitStatus, submitForm, resetStatus } = useContactForm();

  const handleSubmit = async (data: ContactFormData) => {
    await submitForm(data);
    // Form will automatically reset on success
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have a question or want to work together? We'd love to hear from you.
      </p>
      
      <ContactForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        showCancelButton={false}
        className="space-y-6"
      />
    </div>
  );
}

// Example 2: Using the form in a modal/dialog (current implementation)
export function ContactModalExample() {
  const { isSubmitting, submitStatus, submitForm } = useContactForm();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <ContactForm
        onSubmit={submitForm}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        showCancelButton={true}
        onCancel={() => console.log('Modal closed')}
      />
    </div>
  );
}

// Example 3: Custom submit handler with additional logic
export function CustomContactFormExample() {
  const { isSubmitting, submitStatus, submitForm } = useContactForm();

  const handleCustomSubmit = async (data: ContactFormData) => {
    try {
      // Add any custom logic before submission
      console.log('Submitting form with data:', data);
      
      // Submit to Google Apps Script
      await submitForm(data);
      
      // Add any custom logic after successful submission
      console.log('Form submitted successfully!');
      
      // You could trigger analytics, show custom success message, etc.
      
    } catch (error) {
      console.error('Custom error handling:', error);
      // Handle error in your own way
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <ContactForm
        onSubmit={handleCustomSubmit}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        showCancelButton={false}
      />
    </div>
  );
}

// Example 4: Form with custom styling
export function StyledContactFormExample() {
  const { isSubmitting, submitStatus, submitForm } = useContactForm();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Let's Connect</h2>
      <ContactForm
        onSubmit={submitForm}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        showCancelButton={false}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      />
    </div>
  );
}
