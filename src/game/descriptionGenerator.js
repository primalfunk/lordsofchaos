import templates from '../assets/templates.json';
import elements from '../assets/elements.json';

export const generateDescription = () => {
  let description = '';

  // Loop through each template type (appearance, atmosphere, feature, etc.)
  for (const [templateType, templateArray] of Object.entries(templates)) {
    const template = templateArray[Math.floor(Math.random() * templateArray.length)];
    
    // Replace placeholders in the template with random elements
    const filledTemplate = template.replace(/\{(\w+)\}/g, (_, placeholder) => {
      const elementArray = elements[placeholder];
      return elementArray[Math.floor(Math.random() * elementArray.length)];
    });

    description += filledTemplate + ' ';
  }
  console.log(description.trim())
  return description.trim();
}
