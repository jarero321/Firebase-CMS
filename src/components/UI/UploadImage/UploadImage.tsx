import React, { useRef, useState, useContext, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styles from './UploadImages.module.css';

type UploadImagesProps = {
  name: string;
};

const UploadImages: React.FC<UploadImagesProps> = ({ name }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    if (selectedImage) {
      setValue(name, selectedImage);
    }
  }, [selectedImage, setValue, name]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    } else {
      setSelectedImage(null);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.uploadContainer}>
      <div
        className={errors[name] ? styles.uploadBoxError : styles.uploadBox}
        onClick={handleClick}
      >
        <Controller
          control={control}
          name={name}
          rules={{ required: 'Campo obligatorio' }}
          render={({ field }) => (
            <>
              <input
                type="file"
                className={styles.hiddenInput}
                ref={(ref) => {
                  field.ref(ref);
                }}
                onChange={handleFileChange}
                multiple={false}
                accept="image/*"
              />
              {!selectedImage ? (
                <span
                  className={
                    errors[name] ? styles.uploadTextError : styles.uploadText
                  }
                >
                  Haz clic para subir una imagen
                </span>
              ) : (
                <div className={styles.selectedImageContainer}>
                  <span className={styles.uploadText}>
                    {selectedImage.name}
                  </span>
                  <button
                    className={styles.removeImageButton}
                    onClick={handleRemoveImage}
                  >
                    X
                  </button>
                </div>
              )}
            </>
          )}
        />
      </div>
      {errors[name] && (
        <span className={styles.errorMessage}>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default UploadImages;
