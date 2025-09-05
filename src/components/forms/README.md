# Contact Form Implementation

This directory contains a robust, reusable contact form implementation with Google Apps Script integration and excellent UX practices.

## 🚀 Features

- **Reusable Form Component**: Can be used anywhere in your app
- **Google Apps Script Integration**: Sends form data to Google Sheets
- **Zod Validation**: Type-safe form validation
- **React Hook Form**: Optimized form handling with shadcn/ui
- **Excellent UX**: Loading states, error handling, success feedback
- **Configurable**: Easy to customize URLs, timeouts, and settings
- **TypeScript**: Full type safety throughout

## 📁 File Structure

```
src/components/forms/
├── contact-form.tsx              # Main reusable form component
├── contact-dialog.tsx            # Dialog wrapper for the form
├── contact-form-example.tsx      # Basic usage example
├── contact-form-usage-examples.tsx # Advanced usage examples
└── README.md                     # This documentation

src/hooks/
└── use-contact-form.ts           # Custom hook for form logic

src/lib/
├── validations/
│   └── contact.ts               # Zod validation schema
└── config/
    └── contact.ts               # Configuration settings
```

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install react-hook-form @hookform/resolvers zod
npx shadcn@latest add form
```

### 2. Configure Google Apps Script

Update the URL in `src/lib/config/contact.ts`:

```typescript
export const CONTACT_CONFIG = {
  GOOGLE_SCRIPT_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE',
  // ... other settings
};
```

### 3. Google Apps Script Code

Your Google Apps Script should handle the form data like this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = [
      e.parameter.Name,
      e.parameter.email,
      e.parameter.subject,
      e.parameter.message,
      e.parameter.timestamp
    ];
    sheet.appendRow(data);
    return ContentService.createTextOutput('Success');
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}
```

## 📖 Usage

### Basic Usage (Dialog)

```tsx
import ContactDialog from '@/components/forms/contact-dialog';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Contact Me
      </button>
      <ContactDialog 
        isOpen={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </div>
  );
}
```

### Direct Form Usage

```tsx
import ContactForm from '@/components/forms/contact-form';
import { useContactForm } from '@/hooks/use-contact-form';

function ContactPage() {
  const { isSubmitting, submitStatus, submitForm } = useContactForm();
  
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm
        onSubmit={submitForm}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        showCancelButton={false}
      />
    </div>
  );
}
```

### Custom Submit Handler

```tsx
import ContactForm from '@/components/forms/contact-form';
import { useContactForm } from '@/hooks/use-contact-form';

function CustomContactForm() {
  const { isSubmitting, submitStatus, submitForm } = useContactForm();
  
  const handleSubmit = async (data) => {
    // Custom logic before submission
    console.log('Submitting:', data);
    
    await submitForm(data);
    
    // Custom logic after submission
    console.log('Submitted successfully!');
  };
  
  return (
    <ContactForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
      showCancelButton={true}
      onCancel={() => console.log('Cancelled')}
    />
  );
}
```

## ⚙️ Configuration

All settings are centralized in `src/lib/config/contact.ts`:

```typescript
export const CONTACT_CONFIG = {
  // Google Apps Script URL
  GOOGLE_SCRIPT_URL: 'https://script.google.com/...',
  
  // Request timeout (10 seconds)
  REQUEST_TIMEOUT: 10000,
  
  // Auto-close dialog delay (2 seconds)
  SUCCESS_AUTO_CLOSE_DELAY: 2000,
  
  // Fallback email for error messages
  FALLBACK_EMAIL: 'your-email@example.com',
} as const;
```

## 🎨 Customization

### Styling

The form uses Tailwind CSS classes and can be customized:

```tsx
<ContactForm
  className="bg-white p-6 rounded-lg shadow-lg"
  // ... other props
/>
```

### Validation

Modify the Zod schema in `src/lib/validations/contact.ts`:

```typescript
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  // ... customize validation rules
});
```

## 🔧 Props

### ContactForm Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(data: ContactFormData) => Promise<void>` | - | Submit handler function |
| `isSubmitting` | `boolean` | `false` | Loading state |
| `submitStatus` | `'idle' \| 'success' \| 'error'` | `'idle'` | Submission status |
| `showCancelButton` | `boolean` | `false` | Show cancel button |
| `onCancel` | `() => void` | - | Cancel handler |
| `className` | `string` | `''` | Additional CSS classes |

### ContactDialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Dialog open state |
| `onOpenChange` | `(open: boolean) => void` | - | Dialog state handler |

## 🚨 Error Handling

The implementation includes comprehensive error handling:

- **Network errors**: Timeout handling with 10-second limit
- **Validation errors**: Real-time form validation with Zod
- **User feedback**: Clear success/error messages with animations
- **Fallback options**: Direct email link in error messages

## 🎯 Best Practices Implemented

1. **Separation of Concerns**: Form logic separated from UI
2. **Reusability**: Single form component for multiple use cases
3. **Type Safety**: Full TypeScript support with Zod validation
4. **User Experience**: Loading states, animations, clear feedback
5. **Error Handling**: Comprehensive error handling and recovery
6. **Configuration**: Centralized settings for easy maintenance
7. **Accessibility**: Proper form labels and ARIA attributes
8. **Performance**: Optimized with React Hook Form

## 🔄 Migration from Old Implementation

If you're migrating from the old contact component:

1. Replace `import ContactForm from '@/components/contact'` with `import ContactDialog from '@/components/forms/contact-dialog'`
2. Update the component usage: `<ContactDialog isOpen={isOpen} onOpenChange={setIsOpen} />`
3. Remove the old `contact.tsx` file
4. Update any custom styling if needed

The new implementation maintains the same functionality while providing much better flexibility and maintainability.
