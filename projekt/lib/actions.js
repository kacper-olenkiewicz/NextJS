'use server';

import { redirect } from 'next/navigation';
import { createMeal } from './meals';

export async function shareMealAction(formData) {
  const mealData = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };

  await createMeal(mealData);
  redirect('/meals');
}
