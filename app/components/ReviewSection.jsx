import React from 'react';
import Marque from './Marque';

const REVIEW_CONTENT = {
  title: 'Ulasan Dari Para Member',
  description: 'Ulasan dari member iblix terhadap kualitas iblix memberikan rekomendasi'
};

const ReviewSection = React.memo(() => {
  return (
    <section id="Marque" className="w-full py-20">
      <div className="mt-[-40px] px-6 lg:px-12">
        <h1 className="text-2xl font-semibold text-center text-primary">
          {REVIEW_CONTENT.title}
        </h1>
        <p className="text-center mb-8 text-md font-light">
          {REVIEW_CONTENT.description}
        </p>
        <Marque />
      </div>
    </section>
  );
});

ReviewSection.displayName = 'ReviewSection';

export default ReviewSection;
