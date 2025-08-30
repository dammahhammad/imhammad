'use client';

import React, { useState } from 'react';
import { Send, Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Types and interfaces
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

// Validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};

// Form field component
interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  icon: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
}) => {
  const inputId = `contact-${name}`;
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={inputId}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {icon}
        {label}
      </label>
      
      {type === 'textarea' ? (
        <Textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`min-h-[100px] resize-none ${
            error ? 'border-red-500 focus-visible:ring-red-500' : ''
          }`}
        />
      ) : (
        <Input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={error ? 'border-red-500 focus-visible:ring-red-500' : ''}
        />
      )}
      
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

// Main contact form component
const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onOpenChange }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Close modal after success
      setTimeout(() => {
        onOpenChange(false);
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setSubmitStatus('idle');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            I&apos;d love to hear from you! Send me a message and I&apos;ll respond as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(value) => handleInputChange('name', value)}
              error={errors.name}
              icon={<User className="h-4 w-4" />}
            />
            
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              error={errors.email}
              icon={<Mail className="h-4 w-4" />}
            />
          </div>

          <FormField
            label="Subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
            error={errors.subject}
            icon={<MessageSquare className="h-4 w-4" />}
          />

          <FormField
            label="Message"
            name="message"
            type="textarea"
            placeholder="Tell me more about your project, question, or just say hello!"
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
            error={errors.message}
            icon={<MessageSquare className="h-4 w-4" />}
          />

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-sm">
                Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-200 text-sm">
                Something went wrong. Please try again or contact me directly.
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="px-6"
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Export the main component
export default ContactForm;
