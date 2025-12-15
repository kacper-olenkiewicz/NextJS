'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({ name = 'image', label = 'Zdjęcie' }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  function handlePick() {
    inputRef.current?.click();
  }

  function handleChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result?.toString() ?? null);
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <button type="button" onClick={handlePick}>
          Wybierz zdjęcie
        </button>
        <input
          ref={inputRef}
          id={name}
          name={name}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className={classes.input}
          required
        />
        <div className={classes.preview}>
          {preview ? (
            <Image src={preview} alt="Podgląd" fill sizes="12rem" />
          ) : (
            <span>Brak podglądu</span>
          )}
        </div>
      </div>
    </div>
  );
}
