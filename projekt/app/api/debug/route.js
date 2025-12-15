import path from 'path';
import { NextResponse } from 'next/server';

import { getMeal } from '@/lib/meals';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') ?? '';

  let meal = null;
  let error = null;

  try {
    meal = getMeal(slug);
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  return NextResponse.json({
    slug,
    cwd: process.cwd(),
    dbPath: path.resolve('meals.db'),
    mealExists: !!meal,
    meal,
    error,
  });
}
